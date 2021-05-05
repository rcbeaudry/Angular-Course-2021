
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
    


