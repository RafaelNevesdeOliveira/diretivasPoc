import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgclassRoutingModule } from './ngclass-routing.module';
import { NgclassComponent } from './ngclass.component';


@NgModule({
  declarations: [
    NgclassComponent
  ],
  imports: [
    CommonModule,
    NgclassRoutingModule
  ]
})
export class NgclassModule { }
