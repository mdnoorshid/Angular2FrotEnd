import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './register/register.component';
import {AppComponent} from './app.component';

export const routes:Routes=[
    {path:'about' ,component:AboutComponent},
    {path:'register' ,component:RegisterComponent}
];