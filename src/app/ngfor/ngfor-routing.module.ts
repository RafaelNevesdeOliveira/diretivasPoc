import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor.component';

const routes: Routes = [
  {
    path: '',component: NgforComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgforRoutingModule { }
