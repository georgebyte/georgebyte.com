---
layout: post
title: "Angular state management with observable store services"
description: ""
---

<p class="post-excerpt">
TODO
</p>

State management is one of the things that make front-end development a challenge, especially in larger and more complex single page applications.

Probably the most popular way of managing state is using Redux (or a Redux-like method of state management). The main idea is simple:
- one source of truth (app state),
- actions modifying this state in a "pure" way (reducers),
- a way of executing these actions (invoking the reducers by emitting events to them),
- a way of subscribing to state updates or pushing the updates to entities interested in them.

At my day job we have a client facing dashboard application build as a hybrid Angular app (running AngularJS and Angular simultaneously). AngularJS part of the app uses private component state in components' controllers and global services (implementing pup-sub pattern) to handle app's state. This solution is far from ideal - the more features we add, the harder it becomes to ensure the state is consistent across all components and services.

The process of upgrading to Angular gave us the opportunity to rethink how we tackle state management in our app. Introducing new libraries into an app would bring additional complexity to the mix. And since our build system, new Angular framework, TypeScript and hybrid app bootstrap brought a lot of additional complexity already, we didn't want to further complicate things by introducing another layer of complexity of a state management library. We have rather used the ideas from Redux to create a state management solution that leverages Angular (and RxJS) features to do its job. This post demonstrates how we implemented it using observable store services.

## Abstract `Store` class

By leveraging injectable Angular services and RxJS observables we achieved similar data flow as if we used Redux. We implemented an abstract store class. It looks like this:

{% highlight typescript linenos %}
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class Store<T> {
  private _state$: BehaviorSubject<T>;

  protected constructor (initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  get state$ (): Observable<T> {
    return this._state$.asObservable();
  }

  get state (): T {
    return this._state$.getValue();
  }

  setState (nextState: T): void {
    this._state$.next(nextState);
  }
}
{% endhighlight %}

This abstract store class stores the state in a RxJS behavioral subject. Changing the state means pushing modified state into the `_state$` stream. Because the state is represented as a stream (BehaviorSubject), others can subscribe to its updates. It is also possible to get the current state via the `state` getter without subscribing to further state changes. This abstract `Store` class provides a unified interface for all the feature' store services in our app. Let's have a look how exactly to implement an example feature's store service.

## Features' stores

When creating a feature's store service, we should first extend the abstract `Store` class:

{% highlight typescript linenos %}
@Injectable()
export class CoffeeElectionStore extends Store<CoffeeElectionState> {
  ...
}
{% endhighlight %}

Note `CoffeeElectionState` type used when extending the `Store` class. This lets the store know what is the type of its state. `CoffeeElectionState` is a class representing state structure with initial values. In this example it looks like this:

{% highlight typescript linenos %}
export class CoffeeElectionState {
  candidates: {name: string, votes: number}[] = [];
}
{% endhighlight %}

The last thing left to do to make this little example work is to add a `super` call to `CoffeeElectionStore`'s constructor in order to correctly initialize store's state when creating an instance of the `CoffeeElectionStore` store.

{% highlight typescript linenos %}
...
constructor () {
  super(new CoffeeElectionState());
}
...
{% endhighlight %}

Each created instance of `CoffeeElectionStore` now has a way of getting its current state or an observable of state and setting the state. To make it more useful, some feature specific methods to modify the state (similar to Redux reducers) should be added.

{% highlight typescript linenos %}
@Injectable()
export class CoffeeElectionStore extends Store<CoffeeElectionState> {
  constructor () {
    super(new CoffeeElectionState());
  }

  addVote (candidate: {name: string, votes: number}): void {
    this.setState({
      ...this.state,
      candidates: this.state.candidates.map(c => {
        if (c === candidate) {
          return {...c, votes: c.votes + 1};
        }
        return c;
      })
    });
  }

  addCandidate (name: string): void {
    this.setState({
      ...this.state,
      candidates: [...this.state.candidates, {name: name, votes: 0}]
    });
  }
}
{% endhighlight %}

In the example above `CoffeeElectionStore` functionality was extended by defining `addVote` and `addCandidate` methods. In essence these methods modify the state by pushing a new state object into the observable stream (`BehaviorSubject`) via the `setState` helper.

Note how it is impossible to modify the state without notifying listeners about the change. This characteristic of observable stores makes them a perfect fit for implementing one-way data flow in Angular apps - much like with Redux or a similar state management library.

## How to use the store

App's state could all be stored in a single global state object. But as the app grows, so does the state object and it's not long before it becomes just too big to manage. So instead of storing the whole state in one object it is much more manageable to split the state into smaller chunks. A good way to split the properties is to group them by feature and extract them into a separate state object, managed by the feature's store.

Based on such split there are typically two types of stores:
- global stores, which contain the state of a globally used features,
- component stores, which contain the state only used by a single component.

To setup a store containing global state accessed by different services and components in the app, the store is listed in the root app module providers list. The store and its state will be available until we reload the page.

{% highlight typescript linenos %}
@NgModule({
  ...
  providers: [ExampleGlobalStore],
})
export class AppModule {
  ...
}
{% endhighlight %}

To use a global store in different parts of the app it needs to be defined as their dependency. Angular then injects the same instance of a global store (defined as singleton provider in `AppModule`) into every component/ service depending on it.

{% highlight typescript linenos %}
@Component({ ... })
export class ExampleDependantComponent {
  constructor (private exampleGlobalStore: ExampleGlobalStore) {
    // ExampleDependantComponent has access to global state via exampleGlobalStore reference
  }
}
{% endhighlight %}

Note that many global stores can be provided to `AppModule`, each managing its own subset of global state. The codebase is much more maintainable this way, since each store follows the principle of single responsibility.

Not all app state needs to be global though. Some component specific state should only exist in memory as long as the component using it. Once user navigates to a different view, the component is destroyed and its state should be cleaned-up too. We can achieve this by providing the store to a component. This way we get a "self-cleaning" state store, that is kept in memory just as long as the component needing it.

{% highlight typescript linenos %}
@Component({
  ...
  providers: [ExampleComponentStore],
})
export class ExampleComponent {
  ...
}
{% endhighlight %}

Private component stores are used in the same way as global stores by defining them as component's dependencies in the component constructor. There is one important difference though. Private stores are defined as components' providers and not as `AppModule` providers. That's why private stores are not singletons. Instead, Angular creates a new instance of the store each time a component depending on it is created. Multiple instances of the same component can be present in the DOM at the same time and each has its own state. Additionally, when a component is destroyed, so is its store and the memory is auto cleaned.

## Subscribing to state updates in components and services

Once a store instance is injected into a component or service, this component/ service can subscribe to state updates. In previous example of `coffee-election` component, subscribing to state updates looks like this:

{% highlight typescript linenos %}
@Component({ ... })
export class CoffeeElectionComponent implements OnInit {
  constructor (private store: CoffeeElectionStore) {}

  ngOnInit () {
    this.store.state$.subscribe(state => {
      // Logic to execute on state update
    });
  }
}
{% endhighlight %}

It is also possible to only subscribe to updates of a subset of state:

{% highlight typescript linenos %}
this.store.state$
  .map(state => state.candidates)
  .distinctUntilChanged()
  .subscribe(candidates => {
    // Logic to execute on state.candidates update
  });
{% endhighlight %}

Note that these subscriptions must be cleaned up before a component is destroyed in order to prevent memory leaks. We won't go into details about unsubscribing in this post. Check out [this topic on Stack Overflow](https://stackoverflow.com/a/41177163){:target='_blank'} to learn more.

## Subscribing to state updates in components' templates

In case a component doesn't execute any logic on state updates and it serves only as a proxy to pass the state to its template to render it, Angular provides a nice shortcut to subscribe to state updates from templates directly via the `async` pipe. `ngFor` in the example below will redraw a list of candidates every time the state is updated.

{% highlight html linenos %}
<ul>
  <li *ngFor="let candidate of (store.state$ | async).candidates">
    <span>{% raw %}{{ candidate.name }}{% endraw %}</span>
    <span>Votes: {% raw %}{{ candidate.votes }}{% endraw %}</span>
    <button (click)="store.addVote(candidate)">+</button>
  </li>
</ul>
{% endhighlight %}

As a nice bonus, subscriptions to state updates via `async` pipes are automatically cleaned up by the framework upon destroying the component.

## Unit testing the store

Testing state modifying store methods is pretty straightforward. It consists of three steps:
1. Creating an instance of tested store and setting up mocked initial state.
2. Calling a store method the test is testing.
3. Asserting the method updated the state correctly.

In practice unit tests to test the store from the *Coffee election* example look like this:

{% highlight typescript linenos %}
describe('CoffeeElectionStore', () => {
  let store: CoffeeElectionStore;

  const MOCK_CANDIDATES = [{name: 'Test candidate 1', votes: 0}, {name: 'Test candidate 2', votes: 5}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeElectionStore]
    });

    store = new CoffeeElectionStore();
    store.setState({
      candidates: MOCK_CANDIDATES
    });
  });

  it('should correctly add a vote to a candidate', () => {
    store.addVote(MOCK_CANDIDATES[1]);
    expect(store.state.candidates[0].votes).toBe(0);
    expect(store.state.candidates[1].votes).toBe(6);
  });

  it('should correctly add a candidate', () => {
    store.addCandidate('Test candidate 3');
    expect(store.state.candidates[2].name).toBe('Test candidate 3');
  });
});
{% endhighlight %}

## Conclusion

The purpose of this post was to present how one can leverage the built in features of Angular framework to implement a simple yet powerful state management solution. The provided *Coffee election* example app is very simple, but the concepts it demonstrates can be used to successfully manage state in much bigger and more complex apps. At Zemanta we used observable store services to implement a rather complex feature and since the experiment worked out great, we will continue to use such stores in our app going forward.

PS: The example app used in the post is available here: [github.com/jurebajt/coffee-election](https://github.com/jurebajt/coffee-election){:target='_blank'}.

<div class="vertical-separator"></div>

I hope you learned something new while reading this post. If anything seems confusing please get back to me in the comments. Suggestions, improvements or just general discussion about the topic is very welcome, too.

Also, let's connect on [Twitter](https://twitter.com/jurebajt) (I have no product to push on you and my feed stays clean and interesting 😇).
