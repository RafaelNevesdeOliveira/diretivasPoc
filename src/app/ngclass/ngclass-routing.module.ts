import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgclassComponent } from './ngclass.component';

const routes: Routes = [
  {
    path: '',component: NgclassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgclassRoutingModule { }
