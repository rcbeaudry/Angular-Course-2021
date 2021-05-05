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

- Hierarchical Injector for Angular Services
    - Service injected at app.module level, means SAME INSTANCE of Service is available Application-wide
    - At app.component level, SAME INSTANCE is available for all Components (and children that are components), but not for other Services
    - At Component level, SAME INSTANCE available for the Component and all child Components
    - Service instance at lower level will override if service also provided at higher level -- Lower level has priority
- Can also inject services into services, if service provided at app.module level
- For Injectable(), while technically not needed for services that do not have other services injected into them, later
    versions of Angular recommend that all services have this decorator, just in case future functionality changes.  So,
    not needed now, but may be a good habit to get into, just in case

 
