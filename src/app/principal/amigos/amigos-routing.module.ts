import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigosComponent } from './amigos.component';

export const amigosRoutes: Routes = [
  {
    path: 'amigos', component: AmigosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(amigosRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AmigosRoutingModule { }
