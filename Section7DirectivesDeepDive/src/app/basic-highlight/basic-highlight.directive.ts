import { Directive, ElementRef, OnInit } from '@angular/core';

// Square brackets indicate this will be selected when it is an attribute
// ex: <p appBasicHighlight>Styled with new directive!!</p>
@Directive
(
{ selector: '[appBasicHighlight]' }
) 
export class BasicHighlightDirective implements OnInit
{
    // Will learn more about Injectable later
    // Putting private in is a ts shortcut to making elementRef a 
    // property, and automatically setting it
    constructor(private elementRef: ElementRef)
    {
        
    }

    ngOnInit()
    {
        // Not good to directly change DOM properties - see better-highlight
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}