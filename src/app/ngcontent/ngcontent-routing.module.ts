import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgcontentComponent } from './ngcontent.component';

const routes: Routes = [
  {
    path: '',component: NgcontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgcontentRoutingModule { }
