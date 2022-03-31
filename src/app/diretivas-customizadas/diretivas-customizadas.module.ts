import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivasCustomizadasRoutingModule } from './diretivas-customizadas-routing.module';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DiretivasCustomizadasComponent
  ],
  imports: [
    CommonModule,
    DiretivasCustomizadasRoutingModule,
    SharedModule
  ]
})
export class DiretivasCustomizadasModule { }
