# NgCompleteGuideUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes
- Another Bonus Module, from older code, requires back-end setup to run
- PWA => Progresive Web Application
- Hints:
    - Service worker runs on a separate thread from loaded JS attached to HTML pages
    - Manages all pages of a given scope
    - Can intercept outgoing requests, and manipulate (ex., cache pages, and provide when offline)
    - Acts like a proxy
    - ng add @angular/pwa - installs packages and gives pre-configures service worker
    - npm install -g http-server - installs lightweight node-based server
    - https://angular.io/guide/service-worker-intro

