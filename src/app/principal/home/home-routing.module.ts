
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './perfil/profile.component';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
