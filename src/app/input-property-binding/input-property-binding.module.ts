import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputPropertyBindingRoutingModule } from './input-property-binding-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InputPropertyBindingComponent } from './input-property-binding.component';

@NgModule({
  declarations: [InputPropertyBindingComponent],
  imports: [CommonModule, InputPropertyBindingRoutingModule, SharedModule],
})
export class InputPropertyBindingModule {}
