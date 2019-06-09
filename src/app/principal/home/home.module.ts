import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ThfPageModule } from '@totvs/thf-ui';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './perfil/profile.component';
import { DepoimentoComponent } from './depoimentos/depoimento.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DepoimentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ThfPageModule,
    FormsModule,
    MenuModule
  ]
})
export class HomeModule { }
