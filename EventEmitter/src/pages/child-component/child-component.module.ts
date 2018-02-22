import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildComponentPage } from './child-component';

@NgModule({
  declarations: [
    ChildComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildComponentPage),
  ],
})
export class ChildComponentPageModule {}
