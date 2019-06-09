import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfPageModule, ThfModule } from '@totvs/thf-ui';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThfPageModule
  ],
  exports: [
    ThfModule
  ],
  declarations: []
})
export class SharedModule { }
