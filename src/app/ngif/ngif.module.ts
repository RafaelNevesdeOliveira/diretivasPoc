import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgifRoutingModule } from './ngif-routing.module';
import { NgifComponent } from './ngif.component';


@NgModule({
  declarations: [
    NgifComponent
  ],
  imports: [
    CommonModule,
    NgifRoutingModule
  ]
})
export class NgifModule { }
