
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

