import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThfPageModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ThfPageModule,
        FormsModule
    ],
    exports:[
        MenuComponent
    ]
})
export class MenuModule { }
