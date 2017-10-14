# Angular state management with observable store services

State management is one of the thing that makes front-end development a challenge, especially in larger and more complex single page applications. Over the past year we were researching different ways of managing state in our app at my day job. The app is a fairly complex dashboard with a lot of ways for users to interact with it and modify "the state". There are also some real-time updates coming from the server that modify app's state. Because of this it is not a trivial task to ensure consistency and integrity of the state and data flowing through the app.

Probably the most popular way (or perhaps the most hyped way) of managing state is using Redux (or a Redux-like method of state management). The main idea is simple:
- one source of truth (app state),
- actions modifying this state in a "pure" way (reducers),
- a way of executing these actions (invoking the reducers by emitting events to them),
- a way of subscribing to state updates or pushing the updates to entities interested in them.

Redux was first introduced as a React's companion state management system. It gained a lot of traction and it is often considered to be a silver bullet for state management. Sadly, silver bullets in software development are rare. I'm not mocking Redux. Paired with component based app architectures, it really made state management in front-end applications more manageable. But this was not because of a single JavaScript library. It was the main idea of Redux that enabled us to think about state differently and adopt new ways of managing the state. 

Our dashboard application is a hybrid Angular app (running AngularJS and Angular simultaneously).

- While upgrading to Angular we came up with a simple state store architecture.
- Introducing a new library for Redux means introducing new complexity.
- It is possible to achieve similar data flow using injectable services and RxJS observables - something that is a part of core Angular framework. No need to introduce new libraries.
- No new concepts to learn - a store is a class storing the state. Its methods are the actions modifying the state. Because the state is observable (RxJS behavioral subject), interested entities can subscribe to its updates.
- Store class is an abstract class features' stores can extend - unified interface, consistent app architecture.
- How to initialize the store with state object?
- By providing stores to components, you get a "self-cleaning" state store, that is kept in memory just as long as the component needing it - not everything needs to be in global state object.
- Global state can be achieved by providing the store to the root component.

- How to subscribe to state updates in components/ services?
- How to subscribe to state updates in templates using the async pipe?
- What data to store in the store?
- What logic to put in components?
- How to make HTTP requests?
- How to test the store?
- Hot to test the components?
