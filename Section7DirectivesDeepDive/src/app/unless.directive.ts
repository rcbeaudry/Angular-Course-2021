import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective 
{
  // Unless is a property, because of Input, but the set will call the method 
  // whenever the property changes (in this case, when the condition in the HTML changes)
  // Because Angular transforms the "*" struvtural directive into an <ng-template>, we can
  // get that template element, and the place in the document where this is to be rendered.
  // Both can be injected (see constructor)
  // Property name must be same as selector to bind properly
  @Input() set appUnless(condition: boolean)
  {
    if (!condition)
    {
      // We are creating a view in the container that is the template (<ng-template>)
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      // Clear this place in the DOM
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
