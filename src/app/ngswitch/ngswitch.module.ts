import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgswitchRoutingModule } from './ngswitch-routing.module';
import { NgswitchComponent } from './ngswitch.component';


@NgModule({
  declarations: [
    NgswitchComponent
  ],
  imports: [
    CommonModule,
    NgswitchRoutingModule
  ]
})
export class NgswitchModule { }
