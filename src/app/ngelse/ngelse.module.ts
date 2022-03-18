import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgelseRoutingModule } from './ngelse-routing.module';
import { NgelseComponent } from './ngelse.component';


@NgModule({
  declarations: [
    NgelseComponent
  ],
  imports: [
    CommonModule,
    NgelseRoutingModule
  ]
})
export class NgelseModule { }
