# ProjectTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes
- Observable
    -- basically is a data source - for us, imported from rxjs
    -- follows observable pattern
    -- Have observable and observer (subscriber), and in between a timeline
    -- timeline - multiple events (data packages) emitted
    -- Observer is our code -- subscriber
        -- handle data, errors, or completion of the obvservable (some don't complete)
        -- standard hooks above
    -- Async tasks
    -- Constructs to which you subscribe to be notified of chnages in data
    -- Passive, calls events when it had something to say
- Subject
    -- Like an Observable and an Emitter
    -- Code can actively call next() on it, to emit to a subscriber
    -- Better than using a service and emitter to pass data between components
        -- don't use within component, with @Output
    -- Can use all filters on subscription like Observables
    -- Don't forget to unsubscribe to subject subscriptions in ngDestroy()
- Useful Resources & Links
    -- Official Docs: https://rxjs-dev.firebaseapp.com/
    -- RxJS Series: https://academind.com/learn/javascript/understanding-rxjs/
    -- Updating to RxJS 6: https://academind.com/learn/javascript/rxjs-6-what-changed/

