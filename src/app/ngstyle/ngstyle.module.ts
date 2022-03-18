import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgstyleRoutingModule } from './ngstyle-routing.module';
import { NgstyleComponent } from './ngstyle.component';


@NgModule({
  declarations: [
    NgstyleComponent
  ],
  imports: [
    CommonModule,
    NgstyleRoutingModule
  ]
})
export class NgstyleModule { }
