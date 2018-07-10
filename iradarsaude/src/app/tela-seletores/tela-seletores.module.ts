import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { SuiModule, SuiCheckboxModule, SuiRatingModule } from 'ng2-semantic-ui';

import { TelaSeletoresRoutingModule } from './tela-seletores.router';
import { TelaSeletoresService } from './tela-seletores.service';
import { TelaSeletoresComponent } from './tela-seletores.component';

@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    SuiCheckboxModule,
    SuiRatingModule,
    FormsModule,
    ReactiveFormsModule,
    TelaSeletoresRoutingModule,
    HttpModule
  ],
  declarations: [
    TelaSeletoresComponent
  ],
    exports: [
    ],
  providers: [
    TelaSeletoresService
  ]
})

export class TelaSeletoresModule { }
