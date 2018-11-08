---
layout: post
title: "Scalable Angular architecture for larger applications"
description: "TODO"
---

<!-- 
- types, helpers, pipes - where to put?

- Main ideas
    - Component based architecture (smart and presentational components)
        - One way data flow
        - Smart components can be views or containers - they connect stores with dumb components
        - Views are smart containers that can be routed to. They do "URL sync"
    - Making requests
        - Stores are connected to backend via endpoints
        - Updating request state - simple (in endpoint) and more complex (RequestStateUpdater)

- Structure overview
    - App divided into modules
        - Core module
        - Features modules
            - Routing - each feature defines its own routes in its RoutingModule
        - Shared module
        - Views module
        - Layout module
    - Each module defines its constants (enums) and configs

- Styles
    - BEM
    - Nest only :first-child and similar selectors
    - Base and other global styles
    - Component styles - layout child components with styles in parents to make child components more reusable
    - Overwriting child styles from parents with ::ng-deep
    - Responsive design - design in a mobile-first fashion and enhance this design with media queries in views (or other components who know exactly the relation between them and window size, e.g. modals)
    - Global and components' Scss variables (location, naming)

- Testing
    - Tests located besides testee with .spec.ts postfix
    - ...app/testing directory with stubbed components, services etc.

- Extras
    - AppInitializationModule and resolvers
-->

Note: All code examples used in this post are parts of the [Coffee Election app](https://github.com/jurebajt/coffee-election-ng-app-example){:target='_blank'}. Coffee Election app is an Angular app showcasing the scalable Angular app architecture described in this post. It lets its users vote for their favorite type of coffee and displays voting results.

## 1. Main ideas

This section will present the patterns and main ideas used to create a scalable app architecture described later in the post.

### 1.1 State management with observable store services

Effective state management is crucial in larger front-end applications. This scalable Angular app architecture was designed with observable store services as its main way of managing state. Observable stores are a state management solution implemented using RxJS to mimic Redux architecture. I described them in depth in my previous post about [State management in Angular with observable store services](/state-management-in-angular-with-observable-store-services/){:target='_blank'}. I recommend that you check it out before you continue reading this blog post.

### 1.2 Component based architecture

Component based architecture has gained a lot of popularity in front-end development over the past few years. It's a pattern that fits nicely in the context of developing front-end applications and enables developers to write maintainable and extensible front-end code.

The scalable Angular app architecture described in this article is strongly rooted in component based architecture. The purpose of many ideas written bellow is to enhance components' reusability which in turn makes front-end apps easier (and way more fun) to understand and extend. In my opinion, the two most important ideas to create truly reusable components are to separate them into **containers and presentational components** and to ensure that **app's data (state) is flowing in one direction only**.

#### 1.2.1 Smart containers and presentational components

In the [previous article about observable store services](/state-management-in-angular-with-observable-store-services/){:target='_blank'} we've learned how to store app's state in observable stores. To make an app useful though we would want to present this state to the users and create an interface for them to interact with the state. This is where presentational components come into play.

**Presentational components** are responsible for rendering the current state and providing an interface that makes it possible for the user to interact with the app. They define how the rendered state should look like in their templates and style definitions. They also setup event listeners to handle the interaction part of their responsibilities.

Let's see how the theory of presentational components looks like in practice. We'll first have a look at a simplified template of a coffee candidate that the users can vote for.

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/components/coffee-candidate/coffee-candidate.component.html" target="_blank">coffee-candidate.component.html</a>
</span>
{% highlight html linenos %}
<div class="ce-coffee-candidate__name">
    <div class="ce-coffee-candidate__label">Name</div>
    <div class="ce-coffee-candidate__value">{% raw %}{{candidate.name}}{% endraw %}</div>
</div>

<div class="ce-coffee-candidate__action">
    <button
        class="ce-button ce-button--primary ce-coffee-candidate__action-button"
        (click)="onUserAction.emit(UserAction.AddVote)"
    >
        Add vote
    </button>
</div>
{% endhighlight %}

The template above renders `candidate`'s name and sets up a `click` event handler on "Add vote" button that triggers `onUserAction.emit(UserAction.AddVote)`. The properties and methods used are defined in component class:

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/components/coffee-candidate/coffee-candidate.component.ts" target="_blank">coffee-candidate.component.ts</a>
</span>
{% highlight typescript linenos %}
@Component({
    selector: 'ce-coffee-candidate',
    templateUrl: './coffee-candidate.component.html',
    styleUrls: ['./coffee-candidate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeCandidateComponent {
    @Input()
    candidate: Candidate;
    @Output()
    onUserAction = new EventEmitter<UserAction>();

    UserAction = UserAction; // Constants exposed to component's template
}
{% endhighlight %}

As you can see the component class is pretty simple. There is basically only one `Input` and one `Output` defined. And that's the point. `CoffeeCandidateComponent` is concerned with just the presentation of state (passed in via inputs) and reacting to user actions by emitting events (via outputs).

In many cases presentational components need additional methods and properties in order to support more complicated user interfaces. Some examples would be:

* a `boolean` property `isSectionVisible` used to show/hide a certain section of component's UI,
* methods to compute (from input data) some additional properties rendered in the UI,
* event handlers for more complex user interaction,
* methods to throttle or debounce user input etc.

Logic needed to implement these functionalities can be quite complex. But no matter how complex it is, it should always be concerned with just the presentation of app's state and capturing user actions. There should be **no business logic, no direct app's state updates, no API calls etc.** in presentational components. This things should be handled by observable stores or other services. And to connect presentational components to the stores or other services we need container components.

**Smart container components** ...




#### 1.2.2 One-way data flow

## 2. Structure overview

```plain
app/
├── core/ # SINGLETON services provided via root injector
│   ├── core-service-example/
│   │   ├── helpers/
│   │   │   └── example.helpers.ts
│   │   ├── services/
│   │   │   ├── core-service-example-resolver.service.ts
│   │   │   ├── core-service-example.endpoint.ts
│   │   │   ├── core-service-example.store.state.ts
│   │   │   └── core-service-example.store.ts
│   │   ├── types/
│   │   │   └── type-example.ts
│   │   └── core-service-example.module.ts (optional for larger core services)
│   └── core.module.ts
├── features/
│   └── feature-example/
│       ├── components/ # "Dumb" components
│       │   └── simple-component-example/
│       │       ├── _component-example.variables.scss
│       │       ├── component-example.component.html
│       │       ├── component-example.component.scss
│       │       ├── component-example.component.ts
│       │       └── type-example.ts
│       ├── containers/ # Smart containers that can't be routed to
│       │   └── container-example/
│       │       ├── _container-example.variables.scss
│       │       ├── container-example.container.html
│       │       ├── container-example.container.scss
│       │       └── container-example.container.ts
│       ├── helpers/
│       │   └── example.helpers.ts
│       ├── services/
│       │   ├── feature-example.endpoint.ts
│       │   ├── feature-example.store.state.ts
│       │   └── feature-example.store.ts
│       ├── types/
│       │   └── type-example.ts
│       ├── views/ # Smart containers that can be routed to
│       │   └── view-example/
│       │       ├── _view-example.variables.scss
│       │       ├── view-example.view.html
│       │       ├── view-example.view.scss
│       │       └── view-example.view.ts
│       ├── feature-example-routing.module.ts
│       ├── feature-example.configs.ts
│       ├── feature-example.constants.ts
│       └── feature-example.module.ts
├── layout/
│   ├── footer/
│   │   ├── _footer.variables.scss
│   │   ├── footer.component.html
│   │   ├── footer.component.scss
│   │   └── footer.component.ts
│   ├── header/
│   │   ├── _header.variables.scss
│   │   ├── header.component.html
│   │   ├── header.component.scss
│   │   └── header.component.ts
│   └── layout.module.ts
├── shared/
│   ├── components/
│   │   ├── complex-component-example/
│   │   │   ├── components/
│   │   │   │   └── simple-component-example/
│   │   │   │       ├── _component-example.variables.scss
│   │   │   │       ├── component-example.component.html
│   │   │   │       ├── component-example.component.scss
│   │   │   │       ├── component-example.component.ts
│   │   │   │       └── type-example.ts
│   │   │   ├── helpers/
│   │   │   │   └── example.helpers.ts
│   │   │   ├── types/
│   │   │   │   └── type-example.ts
│   │   │   └── complex-component-example.module.ts
│   │   └── simple-component-example/
│   │       ├── _component-example.variables.scss
│   │       ├── component-example.component.html
│   │       ├── component-example.component.scss
│   │       ├── component-example.component.ts
│   │       └── type-example.ts
│   ├── directives/
│   │   └── directive-example.directive.ts
│   ├── pipes/
│   │   └── pipe-example.pipe.ts
│   ├── types/
│   │   └── type-example.ts
│   ├── helpers.ts
│   └── shared.module.ts
├── styles/
│   ├── _variables.scss
│   ├── base.scss
│   ├── buttons.scss
│   ├── ...
│   └── form.scss
├── testing/
│   └── component-example.component.stub.ts
│   └── service-example.service.stub.ts
├── views/
│   ├── page-not-found/
│   │   ├── _page-not-found.variables.scss
│   │   ├── page-not-found.view.html
│   │   ├── page-not-found.view.scss
│   │   └── page-not-found.view.ts
│   └── views.module.ts
├── app-routing.module.ts
├── app.component.html
├── app.component.ts
├── app.constants.ts
└── app.module.ts
```
