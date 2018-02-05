import { Type } from '@angular/core';

/**
 * This class is to define the component and associate it with the required data
 * which is ultimately used by the service template
 */
export class AdItem{
  constructor(public component: Type<any>,public data:any){}
}