
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
        




    


