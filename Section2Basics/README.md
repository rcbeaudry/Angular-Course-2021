
# Notes

- .ts -> TypeScript, "compiled" to JavaScript (main.js -> main.ts compiled to JavaScript)
- Angular meant to be used with TypeScript
- Angular is a JS Framework meant to overwrite DOM at runtime

## Application Load

- index.html is served
- Angular CLI inserts script tag
- main.js is run
- call to .bootstrapModule() in main.js goes to app.module.ts (import statement)
- app.module.ts loads Angular component AppComponent (app.component.ts because of import statement)
- app.component.ts loads app.component.html and app.component.css
    - Selector is "app-root", which goes back to index.html, so Angular knows where to insert html and css because it links the two "app-root"s (one in index.html, and one in app.component.ts)

## Components

- Key Feature
- App composed of components
- Each component has it's own template HTML, .css styling (potentially), and business logic
- Ex., A header w/ buttons, a main page, and a sidebar - Each could be separate components
    - buttons may also be separate components within the header, but depends on how you want to break it up
- AppComponent is special, because it is in the "bootstrap" section of @NgModule in app.module.ts
- New components' selectors wil NOT be added to index.html, but will be added to spp.component.html
    - because app.component.html is now the "root" html for the application
- server component added to app folder - "good practice" to put app-related components under app folder
- each component should be a separate folder
- component it a TypeScript class, so Angular can instantiate it
- Angular groups components into modules
- Module is a bundle of functionality
- Angular will not scan for componments/modules, it must be told
- Can also make components via CLI
    - ng generate component <name>

## Data Binding

- String Interpolation
    - Expression inside double-braces must resolve to a string.  
        - Can call a method to return a string
        - Expression cannot be multi-line or block - so no "if" or "for" type expresions, etc.
    - Can do some conversion, for example serverID is a "number", but it works
    - Don't mix with property binding, will not work
    - General guideline - use for output 

- Property Binding
    - Square brackets tells Angular to use Property Binding to bind the attribute to something else
    - Expression in quotes must resolve to the type of the attribute (disabled is bool, but others are different)
    - Can bind to other things (later...)
    - Don't mix with string interpolation, will not work
    - General guideline - use when you want to change something based on code

- Event Binding
    - Between parens is event to bind to, in quotes is code to execute
    - ex., (click)="onCreateServer()"
    - From slides:
        How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

        Important: For events, you don't bind to onclick but only to click (=> (click)).

        The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.
    - $event is a special reserved word you can use when using event binding tin your template
        - is the data emitted with that event

- Two-Way Databinding
    - From the slides:
        Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

        You then also need to add the import from @angular/forms  in the app.module.ts file:

        import { FormsModule } from '@angular/forms'; 
    - Syntax is parens in brackets -> [(ngModel)] = "serverName"
    
## Directives

- Instructions in the DOM
- Components are directives with a template
    - Ex., Selector placement tells Angular to place our template/code into this spot
- Typically add directives with attribute selector, but technically could be part of css class style, or element
- Will learn building custom Directives later, but for now focus on some built-in ones
    - ngIf 
        - "Structural" directive, as it changes the DOM (add or remove elements)
        -* is required, instructs Angular that the DOM will change
        - expression can be anything TS that evaluates to a bool (proprty, method call, direct code, etc.)
    - ngStyle
        - "Attribute" directive, chnages the element it is placed on
        



