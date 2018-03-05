import { Type } from '@angular/core';

/**
 * class for which we can make object which will hold
 * component and data
 */
export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}
