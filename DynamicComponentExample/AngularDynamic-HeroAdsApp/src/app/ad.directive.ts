import { Directive, ViewContainerRef } from '@angular/core';

/** 
 * Defined an anchor point to tell Angular where to insert components.
*/
@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  //AdDirective injects ViewContainerRef to gain access to the view container of the element
  // that will host the dynamically added component.
  constructor(public viewContainerRef: ViewContainerRef) { }
}

