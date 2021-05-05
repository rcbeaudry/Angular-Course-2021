import { Directive, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive
(
    {selector: '[appDropdown]'}
)

export class DropdownDirective
{
    // Add a certain CSS class to the element this directive is on when it is clicked,
    // and remove the CSS class when it is clicked again
    // Can directly reference open class ... 
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen(eventData: Event)
    {
        // Toggle flag
        this.isOpen = !this.isOpen;
    }
}