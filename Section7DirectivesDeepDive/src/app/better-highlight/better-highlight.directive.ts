import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit
{
  // We can use custom property binding to set colors so we do not have to hardcode them.
  // As an aside, custom event binding also works in directives.
  // If you have a directive that has only one property, or typically only one main property to set,
  //  you can add an alias to that property's input, with the same name as your selector,
  //  and then you would enclose the directive in square brackets in the HTML
  //  For example, if you had this in the TS code below:
  //    @Input('appBetterHighlight') highlightColor: string = 'blue';
  //  then in the HTML you'd have
  //    <p [appBetterHighlight]="'red'" [defaultColor]="'yellow'">Styled with new directive!!</p>
  //  or to only set the main property,
  //    <p [appBetterHighlight]="'red'">Styled with new directive!!</p>
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // Host Binding - binds to proprty of host element
  // Property is Camel case because it is a DOM property
  // Binding is like what we use in basic highlight (ex this.elementRef.nativeElement.style.backgroundColor = 'green';)
  // Binding is to property we expect to be on our element where this directive sits
  // Alternative to using renerer -- not that renderer is wrong, but this is an alternative way to do it
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Renderer2 is a better way to change DOM element
  // Again use ts shortcut to auto make properties set to these values
  constructor(private elementRef: ElementRef, private renderer: Renderer2) 
  { 

  }

  ngOnInit()
  {
    // Init this here, because it is before rendering, but property values will be set
    this.backgroundColor = this.defaultColor;
  }

  // Parameter to HostListener is an event we expect can happen on our element where directive sits
  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    // currently using host binding -- swap comments to use renderer
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor=this.highlightColor;
  }
  // Parameter to HostListener is an event we expect can happen on our element where directive sits
  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    // currently using host binding -- swap comments to use renderer    
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor=this.defaultColor;
  }
}
