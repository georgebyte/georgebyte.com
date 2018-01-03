---
layout: post
title: "State management in Angular with observable store services"
description: ""
---

<p class="post-excerpt">
TODO
</p>

Effective state management in front-end development is a challenge, especially in larger and more complex single page applications. Right now, Redux is probably the most popular way of managing state. It is based on a few main ideas:
- One source of truth (app state).
- State is modified in a "pure" way via reducers.
- Reducers are invoked by emitting events to them.
- Interested entities are notified about state updates.

At my day job we have a client facing dashboard application build as a hybrid Angular app (running AngularJS and Angular side by side). AngularJS part of the app stores some state in components' controllers and other in global services (implementing a pup-sub pattern). Every feature manages its state in a slightly different way because there are no clear conventions set about state management. As a consequence, the more features we add, the harder it becomes to ensure the state stays consistent across all components and services.

The process of upgrading to Angular gave us the opportunity to rethink how we tackle state management in the app. We didn't want to introduce another layer of complexity by adding a state management library to the codebase. New Angular framework, TypeScript, new build system and hybrid app bootstrap already brought a lot of additional complexity to the mix. Instead, we used the ideas from Redux to create **a state management solution that leverages Angular's (and RxJS's) features** to do its job.

This post explains how one can use the observable store pattern we developed to manage state in Angular apps. The solution was inspired by the following article from Angular University: [How to build Angular apps using Observable Data Services](https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/){:target='_blank'}.

To showcase the usage of observable stores we'll build a simple app called *Coffee election* that lets its users vote for their favorite type of coffee and add their own coffee type to the list of candidates. The source code is available on GitHub: [github.com/jurebajt/coffee-election](https://github.com/jurebajt/coffee-election){:target='_blank'}.

## Abstract `Store` class

At the core of observable store pattern is the abstract `Store` class. It leverages RxJS to achieve data flow similar to Redux. It is implemented like this:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/store.ts" target="_blank">store.ts</a></span>
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

The store's state (`_state$`) is a RxJS `BehaviorSubject`. Changing the state means pushing new state object into the `_state$` stream via the `setState` method. Interested entities can subscribe to state updates by subscribing to the `state$` property. It is also possible to get the current state via the `state` property without subscribing to state updates.

`Store` class provides a **unified interface** for all features' store services to extend. In the next section we'll have a look at how to use the abstract `Store` class to implement an example feature store service.

## Features' stores

Feature specific stores are Angular `Injectable`s extending the abstract `Store` class:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.store.ts" target="_blank">coffee-election.store.ts</a></span>
{% highlight typescript linenos %}
@Injectable()
export class CoffeeElectionStore extends Store<CoffeeElectionState> {
  ...
}
{% endhighlight %}

In the code snippet above note the `CoffeeElectionState` type used when extending the `Store`. Specifying `CoffeeElectionState` as the store type adds correct type definitions to the generic store.

`CoffeeElectionState` is a class representing state object with initial values. In the *Coffee election* example app it looks like this:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election-state.ts" target="_blank">coffee-election-state.ts</a></span>
{% highlight typescript linenos %}
export class CoffeeElectionState {
  candidates: {name: string, votes: number}[] = [];
}
{% endhighlight %}

One last thing to do to make this simple example work is to add a `super` call to `CoffeeElectionStore`'s constructor in order to correctly initialize the state when creating a new instance of `CoffeeElectionStore`:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.store.ts" target="_blank">coffee-election.store.ts</a></span>
{% highlight typescript linenos %}
constructor () {
  super(new CoffeeElectionState());
}
{% endhighlight %}

With the above code in place, each instance of `CoffeeElectionStore` has a way of setting its state and getting the current state or an observable of the state. To make it more useful, additional methods to modify the state (similar to Redux reducers) should be added:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.store.ts" target="_blank">coffee-election.store.ts</a></span>
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

In the example above `CoffeeElectionStore`'s functionality was extended by defining `addVote` and `addCandidate` methods. In essence, these methods modify the state by pushing new state objects into the observable `state$` stream via the `setState` method.

Note how it is **impossible to modify the state without notifying listeners about the change**. This characteristic of observable stores makes them a perfect fit for implementing one-way data flow in Angular apps - much like with Redux or a similar state management library.

## Using injectable store services

App's state could all be stored in a single global state object. But as the app grows, so does the state object and it can quickly become too big to easily extend it with new features. So instead of storing the whole state in one place, it is better to **split the state into smaller chunks**. A good way to split the properties is to group them by feature and extract these groups into separate state objects, managed by corresponding stores.

There are two types of stores that emerge from splitting:
- global stores that contain globally used state,
- component stores that contain the states used by a single component.

To set up a **store containing global state** accessed by different services and components, the store is listed as a provider in a module's providers list (root app module or a feature specific module). This way Angular adds a new global provider to its dependency injector. The state in global stores will be available until the page is reloaded.

<span class="highlight-filename">app.module.ts</span>
{% highlight typescript linenos %}
@NgModule({
  ...
  providers: [ExampleGlobalStore],
})
export class AppModule {
  ...
}
{% endhighlight %}

Note that **many global stores can be defined** as providers in app's modules, each managing its own subset of global state. The codebase stays much more maintainable this way, since each store follows the principle of single responsibility.

To use a global store in different parts of the app, the store needs to be defined as their dependency. This way Angular injects the **same instance** of a global store (defined as singleton provider in `AppModule` or any other module) into every component/ service depending on it.

<span class="highlight-filename">example.component.ts</span>
{% highlight typescript linenos %}
@Component({ ... })
export class ExampleComponent {
  constructor (private exampleGlobalStore: ExampleGlobalStore) {
    // ExampleComponent has access to global state via exampleGlobalStore reference
  }
}
{% endhighlight %}

Not all state needs to be global though. **Component specific state** should only exist in memory if a component is using it. Once user navigates to a different view and the component is destroyed, its state should be cleaned-up too. This can be achieved by adding the store to a list of component's providers. This way we get "self-cleaning" stores, that are kept in memory as long as components using them are kept in memory.

<span class="highlight-filename">example.component.ts</span>
{% highlight typescript linenos %}
@Component({
  ...
  providers: [ExampleComponentStore],
})
export class ExampleComponent {
  ...
}
{% endhighlight %}

Private component stores are used in the same way as global stores by defining them as dependencies in the components' constructors. The key difference is that these **component specific stores are not singletons**. Instead, Angular creates a new instance of the store each time a component depending on it is created. As a consequence, multiple instances of the same component can be present in the DOM at the same time, each one of them having its own store instance with its own state.

## Subscribing to state updates in components and services

Once a store instance is injected into a component or service, this component/ service can subscribe to state updates. In the example of `coffee-election` component, subscribing to state updates looks like this:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.component.ts" target="_blank">coffee-election.component.ts</a></span>
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

Note that these **subscriptions must be cleaned up** before a component is destroyed in order to prevent memory leaks. We won't go into details about unsubscribing in this post. Check out [this topic on Stack Overflow](https://stackoverflow.com/a/41177163){:target='_blank'} to learn more.

## Subscribing to state updates in components' templates

In case a component doesn't execute any logic on state update and it only serves as a proxy to pass the state to its template, Angular provides a nice shortcut to subscribe to state updates directly from templates via the `async` pipe. `ngFor` in the example below will redraw a list of candidates every time the state is updated.

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.component.html" target="_blank">coffee-election.component.html</a></span>
{% highlight html linenos %}
<ul>
  <li *ngFor="let candidate of (store.state$ | async).candidates">
    <span>{% raw %}{{ candidate.name }}{% endraw %}</span>
    <span>Votes: {% raw %}{{ candidate.votes }}{% endraw %}</span>
    <button (click)="store.addVote(candidate)">+</button>
  </li>
</ul>
{% endhighlight %}

These subscriptions to state updates via `async` pipes are **automatically cleaned up** by the framework upon destroying the component.

## Unit testing the store

Testing state modifying store methods is pretty straightforward. It consists of three steps:
1. Creating an instance of the tested store and setting up mocked initial state.
2. Calling a store's method the test is testing.
3. Asserting the method updated the state correctly.

In practice unit tests to test the store from the *Coffee election* example look like this:

<span class="highlight-filename"><a href="https://github.com/jurebajt/coffee-election/blob/master/src/app/coffee-election.store.spec.ts" target="_blank">coffee-election.store.spec.ts</a></span>
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

The purpose of this post was to present how one can leverage the built in features of Angular framework to implement a simple yet powerful state management solution. The provided *Coffee election* example app is very simple, but the concepts it demonstrates can be used to successfully manage state in much bigger and more complex apps. At Zemanta we used observable store services to implement a rather complex feature and since the experiment worked out great we will continue to use such stores in our app going forward.

<div class="vertical-separator"></div>

I hope you learned something new by reading this post. If anything seems confusing please get back to me in the comments. Suggestions, improvements or just general discussion about the topic are very welcome, too.

Also, let's connect on [Twitter](https://twitter.com/jurebajt){:target='_blank'} (I have no product to push on you and my feed stays clean and interesting 😇).
