import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Before we can add components we have to define an anchor point to tell Angular where to insert components.
The ad banner uses a helper directive called AdDirective to mark valid insertion points in the template.
 */
@Directive({
    selector: '[ad-host]',
})

/**
 * AdDirective injects ViewContainerRef to gain access to the view container of the element that will host the
 * dynamically added component.
   In the @Directive decorator, notice the selector name, ad-host; that's what we use to apply the directive
 to the element. The next section shows us how.
 */
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}