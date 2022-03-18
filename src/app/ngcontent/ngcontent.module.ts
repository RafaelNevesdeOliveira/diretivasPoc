import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcontentRoutingModule } from './ngcontent-routing.module';
import { NgcontentComponent } from './ngcontent.component';


@NgModule({
  declarations: [
    NgcontentComponent
  ],
  imports: [
    CommonModule,
    NgcontentRoutingModule
  ]
})
export class NgcontentModule { }
