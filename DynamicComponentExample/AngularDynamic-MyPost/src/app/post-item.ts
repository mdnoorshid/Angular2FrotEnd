import { Type } from '@angular/core';

/**
 * This class contain name of the component and
 * the associated data
 */
export class PostItem {
  constructor(public component: Type<any>, public data: any) {}
}