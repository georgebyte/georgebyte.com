---
layout: post
title: "Scalable Angular architecture for larger applications"
description: "TODO"
---

<!-- 
- types, helpers, pipes - where to put?

- Main ideas
    - Component based architecture (smart and dumb (input-output) components)
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

## Main ideas

### State management with observable store services

Effective state management is crucial in larger front-end applications. This scalable Angular app architecture was designed with observable store services as its main way of managing state. Observable stores are a state management solution implemented using RxJS to mimic Redux architecture. I described them in depth in my previous blog post [State management in Angular with observable store services](/state-management-in-angular-with-observable-store-services/). I recommend that you check it out before you continue reading this blog post.

### Smart containers and presentational components

Component based architecture has gained a lot of popularity in front-end development over the past few years.

## Structure overview

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
