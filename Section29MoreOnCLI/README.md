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
    - Good review of CLI commands, configs, etc.
    - Pointers to --help and oficial docs :-)

    - .editorconfig
        - IDE settings for editors
    - .pretierrc
        - Not Angular
        - part of separate package (Angular Essentials)
    -.gitignore
        - tells git which files are not necessary to manage (binaries, auto-gen code, etc)
    - angular.json
        - can manage multiple Angular projects in a folder structure (default-project determines which project CLI operates on)
        - build options can set how project is built
            - assets - what is copied over to dist folder on build
            - configurations -> Manage dev vs. prod options, etc.
        - serve -> settings for ng-serve
        - internationalization
        - tests
    - browserslist
        - picked up by CLI for production 
        - which browsers you want to support
        - want to be restrictive
    - karma.conf.js
        - testing, unit tests
        - generally should leave alone
    - package-lock.json and package.json
        - package.json can have ranges of versions, package-lock has finalized versions in use
        - packages your project uses and versions
        - all dependencies
        - also development tools dependencies
    - tsconfig.*.json
        - TypeScript compiler configs
        - See official docs
        - Generally leave alone
    - tslint.json
        - code quality checking
        - improvement recommendations
    
    - "ng help" for all ng commands

    - Schematics
        - patterns for CLI tools to use
        




    


