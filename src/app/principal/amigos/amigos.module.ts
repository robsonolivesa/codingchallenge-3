import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModule } from '../menu/menu.module';

import { AmigoComponent } from './amigo/amigo.component';
import { AmigosRoutingModule } from './amigos-routing.module';
import { AmigosComponent } from './amigos.component';

import { ThfPageModule } from '@totvs/thf-ui';
import { ThfPageDynamicSearchModule } from '@totvs/thf-templates/components/thf-page-dynamic-search';

@NgModule({
  declarations: [
    AmigosComponent,
    AmigoComponent
  ],
  imports: [
    SharedModule,
    ThfPageModule,
    ThfPageModule,
    CommonModule,
    FormsModule,
    MenuModule,
    AmigosRoutingModule,
    ThfPageDynamicSearchModule
  ]
})
export class AmigosModule { }
