import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfTemplatesModule } from '@totvs/thf-templates';

import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThfTemplatesModule,
    LoginModule
  ]
})
export class AuthModule { }
