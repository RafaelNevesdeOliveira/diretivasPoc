import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivasCustomizadasRoutingModule } from './diretivas-customizadas-routing.module';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';


@NgModule({
  declarations: [
    DiretivasCustomizadasComponent
  ],
  imports: [
    CommonModule,
    DiretivasCustomizadasRoutingModule
  ]
})
export class DiretivasCustomizadasModule { }
