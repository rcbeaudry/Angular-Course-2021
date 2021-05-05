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
    - Another Bonus Module, from older code, just an intro, not in-depth 
        - no philosophy on unit testing methodologies, frameworks, code coverage, etc.
    - "expect" like assert ... various checks to verify results, output, HTML, etc.
    - "ng test" -- will auto-rerun on saved code (like ng serve)
    - TestBed.createComponent to on the fly instantiate components
    - fixture.debugElement.injector.get() for service injection (see resources)
    - spyOn() like mocks
    - async() / whenStable()
        - code still runs asynchronously, but returns specified value from spyOn
        - whenStable() awaits for async code to be done
    - fakeAsync() / tick()
        - tick() says "finish all faked async tasks now"
        - Call before detecting changes
    - Isolated tests
        - Don't need Angular test packages, can just write "standard" unit test
    - Non-Isolated tests
        - Require Angular test packages
    
    - Resources:
        This Module only provides a brief and basic Introduction to Angular Unit Tests and the Angular Testing Suite. This Course isn't focused on Testing.

        If you want to dive deeper, the official Docs actually are a great place to start. There you'll also find a Non-CLI Setup!

        Official Docs: https://angular.io/docs/ts/latest/guide/testing.html

        I can also recommend the following Article: https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine

        For more Information on how to run Tests with the CLI have a look at their official Docs:

        => Unit Tests: https://github.com/angular/angular-cli/wiki/test

        => E2E Tests: https://github.com/angular/angular-cli/wiki/e2e
    


