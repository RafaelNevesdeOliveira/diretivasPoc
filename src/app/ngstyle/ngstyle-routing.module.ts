import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgstyleComponent } from './ngstyle.component';

const routes: Routes = [
  {
    path: '',component: NgstyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgstyleRoutingModule { }
