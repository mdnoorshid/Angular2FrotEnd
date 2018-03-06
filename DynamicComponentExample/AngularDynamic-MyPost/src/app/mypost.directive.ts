import { Directive, ViewContainerRef } from '@angular/core';

/** 
 * Dynamic component will be loaded in the given insertion place. 
 * Insertion place will be view container. To get view container reference we can use either directive 
 * or component that will do dependency injection of ViewContainerRef using constructor and keep scope
 * public. If we want to use instance of ViewContainerRef of directive or component in any other component
 * then we use @ViewChild() decorator and ultimately we can access their instance of ViewContainerRef.
*/
@Directive({ 
   selector: '[cpMyPost]' 
})
export class MyPostDirective {
   constructor(public viewContainerRef: ViewContainerRef) { }
}