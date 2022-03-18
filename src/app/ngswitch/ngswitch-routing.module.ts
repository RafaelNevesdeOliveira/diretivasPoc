import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgswitchComponent } from './ngswitch.component';

const routes: Routes = [
  {
    path: '',component: NgswitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgswitchRoutingModule { }
