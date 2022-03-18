import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgforRoutingModule } from './ngfor-routing.module';
import { NgforComponent } from './ngfor.component';


@NgModule({
  declarations: [
    NgforComponent
  ],
  imports: [
    CommonModule,
    NgforRoutingModule
  ]
})
export class NgforModule { }
