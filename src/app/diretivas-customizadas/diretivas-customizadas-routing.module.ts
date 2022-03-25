import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';

const routes: Routes = [
  {
    path: '',component: DiretivasCustomizadasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretivasCustomizadasRoutingModule { }
