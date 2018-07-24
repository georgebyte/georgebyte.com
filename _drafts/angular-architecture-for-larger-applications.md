---
layout: post
title: "Angular architecture for larger applications"
description: "TODO"
---

## Component based architecture


## Structure overview

```plain
app/
├── core/ # SINGLETON services provided via root injector and SINGLETON components (e.g. modal dialog)
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
│   ├── complex-component-example/
│   │   ├── components/
│   │   │   └── simple-component-example/
│   │   │       ├── _component-example.variables.scss
│   │   │       ├── component-example.component.html
│   │   │       ├── component-example.component.scss
│   │   │       ├── component-example.component.ts
│   │   │       └── type-example.ts
│   │   ├── helpers/
│   │   │   └── example.helpers.ts
│   │   ├── types/
│   │   │   └── type-example.ts
│   │   └── complex-component-example.module.ts
│   ├── simple-component-example/
│   │   ├── _component-example.variables.scss
│   │   ├── component-example.component.html
│   │   ├── component-example.component.scss
│   │   ├── component-example.component.ts
│   │   └── type-example.ts
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
│   │   └── component-example/
│   │       ├── ...
│   │       └── (similar to complex/simple-component-example in core module)
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
