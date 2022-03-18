import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgelseComponent } from './ngelse.component';

const routes: Routes = [
  {
    path: '',component: NgelseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgelseRoutingModule { }
