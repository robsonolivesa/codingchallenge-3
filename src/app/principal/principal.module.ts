import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AmigosModule } from './amigos/amigos.module';
import { DepoimentosModule } from './depoimentos/depoimentos.module';
import { SharedModule } from '../shared/shared.module';
import { ThfPageModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    AmigosModule,
    SharedModule,
    ThfPageModule,
    FormsModule,
    MenuModule,
    DepoimentosModule
  ]
})

export class PrincipalModule { }
