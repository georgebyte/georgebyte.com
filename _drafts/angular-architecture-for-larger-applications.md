---
layout: knowledge-entry
title: "Scalable Angular architecture for larger applications"
description: "TODO"
date: 2018-11-20
---

<!-- 
- Structure overview
    - App divided into modules
        - Core module
        - Features modules
            - Routing - each feature defines its own routes in its RoutingModule
        - Shared module
        - Views module
        - Layout module
    - Each module defines its constants (enums) and configs, types, helpers, pipes etc.
    - Subscribing to updates in other core or feature stores

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
    - OnPush change detection strategy and immutable objects
-->

Note: All code examples used in this post are simplified snippets of code from the [Coffee Election app](https://github.com/jurebajt/coffee-election-ng-app-example){:target='_blank'}. Coffee Election app is an Angular app showcasing the scalable Angular app architecture described in this post. It lets its users vote for their favorite type of coffee and displays voting results. To see actual, non-simplified implementations, just click on the file name above code blocks.

## 1. Main ideas and concepts

This section will present the patterns and main ideas used to create a scalable app architecture described later in the post.

### 1.1 State management with observable store services

Effective state management is crucial in larger front-end applications. This scalable Angular app architecture was designed with observable store services as its main way of managing state. Observable stores are a state management solution implemented using RxJS to mimic Redux architecture. I described them in depth in my previous post about [State management in Angular with observable store services](/state-management-in-angular-with-observable-store-services/){:target='_blank'}. I recommend that you check it out before you continue reading this blog post.

### 1.2 Component based architecture

Component based architecture has gained a lot of popularity in front-end development over the past few years. It's a pattern that fits nicely in the context of developing front-end applications and enables developers to write maintainable and extensible front-end code.

The scalable Angular app architecture described in this article is strongly rooted in component based architecture. The purpose of many ideas written bellow is to enhance components' reusability which in turn makes front-end apps easier (and way more fun) to understand and extend. In my opinion, the most important part of creating truly reusable components is to separate them into **containers and presentational components**.

#### 1.2.1 Presentational components

In the [previous article about observable store services](/state-management-in-angular-with-observable-store-services/){:target='_blank'} we've learned how to store app's state in observable stores. To make an app useful though we would want to present this state to the users and create an interface for them to interact with the state. This is where presentational components come into play.

Presentational components are responsible for rendering the current state and providing an interface that makes it possible for the user to interact with the app. They define how the rendered state should look like in their templates and style definitions. They also setup event listeners to handle the interaction part of their responsibilities.

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

Logic needed to implement these functionalities can be quite complex. But no matter how complex it is, it should always be concerned with just the presentation of app's state and capturing of user actions. There should be **no business logic, no direct app's state updates, no API calls etc.** in presentational components. This should be handled by observable stores or other services.

Presentational components can also include other components in their templates in order to keep their purpose as focused as possible. These additional components can be defined in presentational component's template directly or [projected from parent components](https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b){:target='_blank'} into a `<ng-content>` tag.

What one gets by implementing this pattern of presentational components is a clear separation of concerns. **Presentational components are decoupled from the app's business logic and have no clue about app's state structure.** They **define the rules (an interface)** of how to communicate with them via typed inputs and outputs. And this makes presentational components truly **reusable**.

Good, we've got presentational components covered. Let's continue and explore the other type of components we need in order to create an actual app. Presentational components are decoupled from business logic and app's state structure, but we still need to somehow connect their inputs and outputs correctly to that business logic, state stored in observable stores and services. And that's the role of smart container components.

#### 1.2.2 Smart container components

Smart container components are components that act as a "glue" which **binds observable stores and other business logic with presentational components** in a loosely coupled way. They are "smart" because in order achieve this they must know how app's state is structured, which stores contain the state required, which store's method to call when an output callback is triggered by a presentational component etc. Because of that, container components are much more specific to app's features and their reusability is lower. But that's fine - some parts of the app must be smart so that the app can do smart things.

A container component class may look something like this (please refer to my previous post about [observable store services](/state-management-in-angular-with-observable-store-services/){:target='_blank'} if any of the code examples bellow doesn't make sense to you):

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/views/coffee-list/coffee-list.view.ts" target="_blank">coffee-list.view.ts</a>
</span>
{% highlight typescript linenos %}
@Component({
    templateUrl: './coffee-list.view.html',
    styleUrls: ['./coffee-list.view.scss'],
    providers: [CoffeeListStore, CoffeeListEndpoint],
})
export class CoffeeListView implements OnInit {
    constructor(public store: CoffeeListStore) {}

    ngOnInit(): void {
        this.store.init();
    }
}
{% endhighlight %}

Nothing too complicated. The most interesting parts are:

* `providers: [CoffeeListStore, CoffeeListEndpoint]` which defines the services we'll need in this component and it's subcomponents,
* `constructor(public store: CoffeeListStore) {}` which creates a new instance of the observable store,
* `this.store.init()` which initializes the observable store.

The template of a container component is much more interesting in my opinion:

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/views/coffee-list/coffee-list.view.html" target="_blank">coffee-list.view.html</a>
</span>
{% highlight html linenos %}
<ng-container *ngIf="{state$: store.state$ | async} as subs">
    <div
        class="ce-panel ce-coffee-list-view__list-item"
        *ngIf="subs.state$.requests.listCandidates.inProgress"
    >
        <div class="ce-loader ce-loader--takeover"></div>
    </div>

    <ng-container *ngIf="!subs.state$.requests.listCandidates.inProgress">
        <div
            class="ce-panel ce-coffee-list-view__list-item"
            *ngFor="let candidate of subs.state$.candidateList.candidates"
        >
            <ce-coffee-candidate
                class="ce-coffee-candidate ce-coffee-list-view__candidate"
                [candidate]="candidate"
                (onUserAction)="store.submitUserAction(candidate, $event)"
            ></ce-coffee-candidate>
        </div>
    </ng-container>
</ng-container>
{% endhighlight %}

The example above shows a container component "in action". First a `subs` object is created whose role is to store subscriptions to different observables stores. This is an optimization so that only one subscription per store is created in a template by [storing conditional result in a variable](https://angular.io/api/common/NgIf#storing-conditional-result-in-a-variable){:target='_blank'}. Otherwise `async` pipe would create a new subscription for every template binding using `store.state$` observable.

The next interesting part is the inclusion of a presentational component (`<ce-coffee-candidate>`). Notice how the container component wires correct inputs and outputs to `CoffeeCandidateComponent`. As I stated before, container component knows how `store`'s state is structured and which methods of modifying the state exist in the store. It also knows what the interface exposed by `CoffeeCandidateComponent` looks like. And it knows how to connect the store to `CoffeeCandidateComponent` in order to add a voting feature to the app.

The best part is that the store doesn't care who uses its state and in what way it is used. It is instead concerned with implementing the right business logic and state persistance. The store assumes a "smart" consumer knows how to use its exposed interface. Similarly `CoffeeCandidateComponent` presentational component isn't concerned with where a `candidate` to render comes from or how to update the state when user votes for this coffee candidate.

This clear separation of concerns makes the app much easier to understand and extend with new features. And it enables data to "flow" in one direction through the app. I'll explain this further in a minute.

There's is just one more thing left to explain in this section. You may have noticed the above container component is actually called a "view". This isn't a mistake.

A **view** is a special type of container component. It's a smart container **component which can be routed to** by Angular `Router`. In other words, it's a component included in the list of `Routes` with a path specified:

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/coffee-list-routing.module.ts" target="_blank">coffee-list-routing.module.ts</a>
</span>
{% highlight typescript linenos %}
const routes: Routes = [
    {
        path: 'list',
        component: CoffeeListView,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoffeeListRoutingModule {}
{% endhighlight %}

Views are quite similar to regular container components. The only difference is that views are responsible for **synching query params' state with state in app's stores**. An example will make this statement much clearer:

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/views/coffee-list/coffee-list.view.ts" target="_blank">coffee-list.view.ts</a>
</span>
{% highlight typescript linenos %}
export class CoffeeListView implements OnInit, OnDestroy {
    private ngUnsubscribe$: Subject<undefined> = new Subject();

    constructor(public store: CoffeeListStore, private route: ActivatedRoute) {}

    ngOnInit(): void {
        ...
        this.subscribeToQueryParamsUpdates();
    }

    private subscribeToQueryParamsUpdates(): void {
        this.route.queryParams
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(params => {
                this.store.sortCandidates(params.sort);
            });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
{% endhighlight %}

`CoffeeListView` is responsible for updating the state whenever `sort` query param is updated. It does this by subscribing to an observable of route's query params (`this.route.queryParams.subscribe(...)`) and then invoking store's `sortCandidates` method with `sort` query param value.

Views should take care of doing the sync in reverse direction too. What this means is that whenever state in store is updated (and this update must be reflected in the URL), it is views that are responsible for making the new state persistent by updating the URL. In practice it looks like this:

{% highlight typescript linenos %}
this.store.state$
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe(state => {
        this.router.navigate(['.'], {
            queryParams: {
                sort: state.sort,
            },
        });
    });
{% endhighlight %}

### 1.3 One-way data flow

As promised a few paragraphs above, this section will explore what is a good way for data to "flow" through the app. What do I have in mind when I say *data*? Two things mainly:

* **app's state** we would like to present to the user and
* **actions' payload** needed to update app's state upon user interaction.

One-way data flow is a great pattern to ensure state is consistent across all components making up the app. It became quite popular thanks to React. But this doesn't mean it is only possible to use this pattern in React apps. On the contrary, I would argue that one-way data flow is a great pattern to use when developing front-end applications regardless of framework. Because data flows in one direction it is easy to "follow" it around and get a clear picture of how the app works.

Here's a diagram of how the one-way data flow pattern looks like when applied to the architecture I'm describing in this blog post:

<div class="image image--centered">
    <img src="/images/one-way-data-flow.png" alt="Diagram 1: One-way data flow" class="image__img">
    <p class="image__description">Diagram 1: One-way data flow</p>
</div>

The diagram might look a bit intimidating at first but don't worry, it's actually quite simple to understand it if you follow the arrows. Here's a breakdown of our "data journey":

1. The store first loads data from an API (more on this later). It then transforms loaded data if necessary and updates its state.
2. Updated state is pushed to all subscribers (smart components or other stores) - this happens automatically since state is a RxJS observable.
3. Smart components compute local state (if needed) from updated state.
4. Updated state and smart components' local state is propagated to presentational components via `@Input()` bindings.
5. Presentational components compute local state (if needed) from inputs and re-render the state.

Upon user interaction data flows like this:

1. Presentational component registers user interaction and emits an event with payload to a smart component via `@Output()` binding.
2. Smart component reacts to emitted event by invoking store's method with arguments computed form event's payload.
3. Store updates its state directly or sends a request to an API to make the update persistent. In this case new state is loaded from API and stored into state after the request is complete.
4. ... and we've come full circle.

There is another version of the circle presented in the diagram. In this version presentational components are substituted with query params. There are only two differences in how data flows:

* Upon state update, view propagates updates to query params instead of presentational components.
* State updates are triggered by query params updates instead of user's actions.

This concludes the explanation of one-way data flow. It's not so hard too keep the state in all parts of the app consistent if data flows in one direction. There's always just **one source of truth** for a particular piece of state (one of the stores) and there is only **one way to update** this state (via a corresponding store).

### 1.4 Communication with external systems

The last pattern I'll talk about in this part of the post is about how to connect an app with external "systems", such as server API, browser's local storage, cookies etc. Although I'll only provide examples of communication with servers, the two main ideas are the same for other types of external systems:

* Observable **stores** should be the **only part of an app that knows about external systems**.
* Observable stores should not communicate with external systems directly - a **proxy service** should be used to abstract away communication details.

The following examples demonstrate how these ideas translate into practice when communicating with a REST API. The proxy service in this case is called `CoffeeListEndpoint` and is injected into the store as `endpoint`. The store uses it to reload a list of candidates on initialization and when user wants to sort the list of candidates (omitted in the example for clarity).

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/services/coffee-list.store.ts" target="_blank">coffee-list.store.ts</a>
</span>
{% highlight typescript linenos %}
@Injectable()
export class CoffeeListStore extends Store<CoffeeListStoreState>
    implements OnDestroy {
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    private reloadCandidates$: Subject<undefined> = new Subject();
    private storeRequestStateUpdater: StoreRequestStateUpdater;

    constructor(private endpoint: CoffeeListEndpoint) {
        super(new CoffeeListStoreState());
    }

    init(): void {
        this.initReloadCandidates$();
        this.reloadCandidates();

        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
    }

    ...

    reloadCandidates(): void {
        this.reloadCandidates$.next();
    }

    ...

    private initReloadCandidates$(): void {
        this.reloadCandidates$
            .pipe(
                switchMap(() => {
                    return this.endpoint.listCandidates(
                        this.state.candidateList.sort,
                        this.storeRequestStateUpdater
                    );
                }),
                tap(candidates => {
                    this.setState({
                        ...this.state,
                        candidateList: {
                            ...this.state.candidateList,
                            candidates: candidates,
                        },
                    });
                }),
                retry(),
                takeUntil(this.ngUnsubscribe$)
            )
            .subscribe();
    }
}
{% endhighlight %}

Notice how `endpoint.listCandidates` is not called directly. This pattern is used to make sure we'll always **update the state with data from endpoint's last response** if multiple reload candidates requests are initiated at roughly the same time. When we want to reload the list of candidates we push a new value (`undefined`) into `store.reloadCandidates$` stream. This triggers execution of pipeable operators. Inside `switchMap` we create a new request and `switchMap` replaces previous pending request (if present) with this newly created request. The rest of pipeable operators are only executed when the last request is finished. The state is then updated with most recent data from endpoint. If a request to the endpoint is not successful the `retry` operator is used to resubscribe to `store.reloadCandidates$` observable. Otherwise the stream would complete and no further reloads could be triggered by pushing new values into `store.reloadCandidates$`.

Lets now have a look at how `endpoint.listCandidates` is implemented.

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/services/coffee-list.endpoint.ts" target="_blank">coffee-list.endpoint.ts</a>
</span>
{% highlight typescript linenos %}
@Injectable()
export class CoffeeListEndpoint {
    constructor(private http: HttpClient) {}

    listCandidates(
        sort: Sort,
        requestStateUpdater: StoreRequestStateUpdater
    ): Observable<Candidate[]> {
        const request = COFFEE_LIST_CONFIG.requests.listCandidates;
        const options = {
            params: {
                ...sortHelpers.convertSortToRequestParams(sort),
            },
        };
        requestStateUpdater(request.name, {inProgress: true});
        return this.http
            .get<ApiResponse<Candidate[]>>(request.url, options)
            .pipe(
                map(response => {
                    requestStateUpdater(request.name, {inProgress: false});
                    return response.data;
                }),
                catchError((error: HttpErrorResponse) => {
                    requestStateUpdater(request.name, {
                        inProgress: false,
                        error: true,
                    });
                    return throwError(error);
                })
            );
    }

    ...
}
{% endhighlight %}

In essence, endpoint constructs request parameters and executes HTTP request via Angular's `HttpClient`. One part that needs some more context are the calls to `requestStateUpdater`. `requestStateUpdater: StoreRequestStateUpdater` is a function used to update request state in the store. Endpoint from the example above uses it to update the state of a request to `inProgress` or `error`. Stores use `endpointHelpers.getStoreRequestStateUpdater` in order to generate the default `StoreRequestStateUpdater`.

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/shared/helpers/endpoint.helpers.ts" target="_blank">endpoint.helpers.ts</a>
</span>
{% highlight typescript linenos %}
export function getStoreRequestStateUpdater(
    store: any,
): StoreRequestStateUpdater {
    return (requestName, requestState) => {
        store.setState({
            ...store.state,
            requests: {
                ...store.state.requests,
                [requestName]: requestState,
            },
        });
    };
}
{% endhighlight %}

Sometimes a more flexible way of updating request state is required. In these cases `requestStateUpdater: CustomRequestStateUpdater` can be passed to the endpoint. For example, calling the `getUpdateCandidateRequestStateUpdater` in `CoffeeListStore` generates such custom request state updater.

<span class="highlight-filename">
    <a href="https://github.com/jurebajt/coffee-election-ng-app-example/blob/master/src/app/features/coffee-list/services/coffee-list.store.ts" target="_blank">coffee-list.store.ts</a>
</span>
{% highlight typescript linenos %}
...

private getUpdateCandidateRequestStateUpdater(
    candidate: Candidate
): CustomRequestStateUpdater {
    return requestState => {
        this.setState({
            ...this.state,
            candidateList: {
                ...this.state.candidateList,
                candidates: this.state.candidateList.candidates.map(c => {
                    if (c.id === candidate.id) {
                        return {...c, updateRequest: requestState};
                    }
                    return c;
                }),
            },
        });
    };
}

...
{% endhighlight %}

This custom request state updater is used to update the candidate's `updateRequest` property with request state passed in via `requestState`.

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
