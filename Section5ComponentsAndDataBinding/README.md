
# Notes

- We have used event and proprty binding on HTML elements, and on directives
- Can also bind to our own custom properties and events.
    - See code for comments on wiring it up
- Styles in a component's .CSS file are applied to the COMPONENT ONLY
    - This is not a browser default, but it is a behavior from Angular
    - Adds attribute names to each element on the component, and does the same on the component's CSS
    - Can add to the component's @Component decorator
        - encapsulation: ViewEncapsulation.XXXX (and import ViewEncapsulation from @angular/core)
        - XXXX === none, means styles from this component will be applied globally
        - XXXX === ShadowDom (or Native in older versions), means same as Emulated for borwsers that support ShadowDOM
        - XXXX === Emulated - default behavoir described above
- Local references -- Can be useful for passing data ... see example in controller.component.html
- ViewChild in Angular 8+
    - Another way to get local references
    - @ViewChild('serverContentInput', {static: true})
    - must add static:true to @ViewChild and @ContentChild IF they are accessed inside of ngOnInit()
- ContentChild in Angular 8+
    - Like ViewChild, local reference, but for content injected by ng-content
    - @ContentChild('serverContentInput', {static: true})
    - must add static:true to @ViewChild and @ContentChild IF they are accessed inside of ngOnInit()    
- Can use a ViewChild() property to change the DOM value as well, but not recommended to do it this way
    - Better way is directives ... us eString interpolation or Property Binding to output
- Component lifecycle
    - ngOnChanges - at start, and after a bound input property changes (@Input)
    - ngOnInit - once component initialized (not necessarily visible, but intiial object creation) - after constructor
    - ngDoCheck - called during every change detection runs (clicks, observable change, property change, etc.)
    - ngAfterContentInit - called after ng-content has been projected into view
    - ngAfterContentChecked - every time projected content has been checked
    - ngAfterViewInit - after component view and child views have been initialized
    - ngAfterViewChecked - every time the view and child views have been checked
    - ngOnDestroy - when component is about to be destroyed
- If using lifecycle methods, ok, to just use methods, but should also add interface to class, and import interface



