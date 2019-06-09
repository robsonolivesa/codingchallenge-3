import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepoimentosComponent } from './depoimentos.component';

export const rotas: Routes = [
  {
    path: 'depoimentos', component: DepoimentosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [
    RouterModule
  ]
})

export class DepoimentosRoutingModule { }
