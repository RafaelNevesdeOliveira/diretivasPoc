import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgstyleRoutingModule } from './ngstyle-routing.module';
import { NgstyleComponent } from './ngstyle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgstyleComponent
  ],
  imports: [
    CommonModule,
    NgstyleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgstyleModule { }
