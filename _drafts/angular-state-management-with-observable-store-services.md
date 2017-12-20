---
layout: post
title: "Angular state management with observable store services"
description: ""
---

<p class="post-excerpt">
</p>

State management is one of the thing that makes front-end development a challenge, especially in larger and more complex single page applications. Over the past year we were researching different ways of managing state in our app at my day job. The app is a fairly complex dashboard with a lot of ways for users to interact with it and modify "the state". There are also some real-time updates coming from the server that modify app's state. Because of this it is not a trivial task to ensure consistency and integrity of the state and data flowing through the app.

Probably the most popular way (or perhaps the most hyped way) of managing state is using Redux (or a Redux-like method of state management). The main idea is simple:
- one source of truth (app state),
- actions modifying this state in a "pure" way (reducers),
- a way of executing these actions (invoking the reducers by emitting events to them),
- a way of subscribing to state updates or pushing the updates to entities interested in them.

Redux was first introduced as a React's companion state management system. It gained a lot of traction and it is often considered to be a silver bullet for state management. Sadly, silver bullets in software development are rare. I'm not mocking Redux. Paired with component based app architectures, it really made state management in front-end applications more manageable. But this was not because of a single JavaScript library. It was the main idea of Redux that enabled us to think about state differently and adopt new ways of managing the state.

Our dashboard application is a hybrid Angular app (running AngularJS and Angular simultaneously). AngularJS part of the app uses a pup-sub like pattern with global services to ensure state consistency. But it's far from ideal, the more features we add, the harder it becomes to ensure state is consistent across all components and services. That's why we decided to find a solution for easier state management when we started the upgrade to Angular.

Introducing new libraries into an app brings additional complexity to the mix. And since our build system, new Angular framework, TypeScript and hybrid app bootstrap brought a lot of additional complexity, we didn't want to further complicate things by introducing another layer of complexity of a state management library. We have rather used the ideas from Redux to implement a state store architecture that leverages Angular (and RxJS) features to do its job.

Leveraging injectable Angular services and RxJS observables we achieved similar data flow as if we used Redux. We implemented an abstract store class. It looks like this:

{% highlight typescript linenos %}
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export class Store<T> {
    private _state$: BehaviorSubject<T>;

    protected constructor (initialState: T) {
        this._state$ = new BehaviorSubject(initialState); // A long comment to test text wrapping in code blocks
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

When creating a feature's store service, we should first extend the abstract `Store` class:

{% highlight typescript linenos %}
@Injectable()
export class CoffeeShopStore extends Store<CoffeeShopState> {}
{% endhighlight %}

Note `CoffeeShopState` type used when extending the `Store` class. This lets the store know what is the type of its state. `CoffeeShopState` is a class representing state structure with initial values. In this example it looks like this:

{% highlight typescript linenos %}
export class CoffeeShopState {
    orders: {type: string, quantity: number}[] = [];
    preparedCoffees: string[] = [];
}
{% endhighlight %}

The last thing to do to make this little example work is to add a `super` call to `CoffeeShopStore`'s constructor in order to correctly initialize store's state when creating an instance of the store.

{% highlight typescript linenos %}
@Injectable()
export class CoffeeShopStore extends Store<CoffeeShopState> {
    constructor () {
        super(new CoffeeShopState());
    }
}
{% endhighlight %}

`CoffeeShopStore` is now ready to be used in Angular apps. Each instance of `CoffeeShopStore` has a way of getting its current state or an observable of state and setting the state. To make it more useful we should add some feature specific methods to modify the state (similar to Redux reducers).

{% highlight typescript linenos %}
@Injectable()
export class CoffeeShopStore extends Store<CoffeeShopState> {
    constructor () {
        super(new CoffeeShopState());
    }

    addOrders (orders: {type: string, quantity: number}[]): void {
        this.state = {
            ...this.state,
            orders: [
                ...this.state.orders,
                orders,
            ],
        };
    }

    processOrders (): void {
        this.state = {
            ...this.state,
            preparedCoffees: [
                ...this.state.preparedCoffees,
                newOrders,
            ],
        };
    }
}
{% endhighlight %}

<!--
- Fix/ find better examples of reducers.
- Describe immutable state.

- By providing stores to components, you get a "self-cleaning" state store, that is kept in memory just as long as the component needing it - not everything needs to be in global state object.
- Global state can be achieved by providing the store to the root component.

- How to subscribe to state updates in components/ services?
- How to subscribe to state updates in templates using the async pipe?
- What data to store in the store?
- What logic to put in components?
- How to make HTTP requests?
- How to test the store?
- Hot to test the components?
-->
