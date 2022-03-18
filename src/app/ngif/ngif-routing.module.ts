import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './ngif.component';

const routes: Routes = [
  {
    path: '',component: NgifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgifRoutingModule { }
