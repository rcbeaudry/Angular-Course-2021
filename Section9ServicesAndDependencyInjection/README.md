
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

 
