import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

import { LoginComponent } from './login.component';

@NgModule({

  declarations: [
    LoginComponent
  ],
  
  imports: [
    CommonModule,
    ThfPageLoginModule
  ]
})
export class LoginModule { }
