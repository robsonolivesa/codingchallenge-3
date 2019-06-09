import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepoimentosRoutingModule } from './depoimentos-routing.module';
import { DepoimentosComponent } from './depoimentos.component';
import { ThfPageModule } from '@totvs/thf-ui';
import { ThfPageDynamicSearchModule } from '@totvs/thf-templates/components/thf-page-dynamic-search';
import { DepoimentoComponent } from './depoimento/depoimento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    DepoimentosComponent,
    DepoimentoComponent
  ],
  imports: [
    SharedModule,
    ThfPageModule,
    CommonModule,
    FormsModule,
    MenuModule,
    DepoimentosRoutingModule,
    ThfPageModule,
    ThfPageDynamicSearchModule
  ]
})
export class DepoimentosModule { }
