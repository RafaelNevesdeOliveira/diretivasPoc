import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPropertyBindingComponent } from './input-property-binding.component';

const routes: Routes = [
  {
    path:'',component:InputPropertyBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputPropertyBindingRoutingModule { }
