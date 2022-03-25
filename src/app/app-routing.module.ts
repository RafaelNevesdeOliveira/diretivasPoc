import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'ngif'
  },
  {
    path: 'ngif',
    loadChildren: ()=> import('./ngif/ngif.module').then(m => m.NgifModule)
  },
  {
    path: 'ngfor',
    loadChildren: ()=> import('./ngfor/ngfor.module').then(m => m.NgforModule)
  },
  {
    path: 'ngclass',
    loadChildren: ()=> import('./ngclass/ngclass.module').then(m => m.NgclassModule)
  },
  {
    path: 'ngstyle',
    loadChildren: ()=> import('./ngstyle/ngstyle.module').then(m => m.NgstyleModule)
  },
  {
    path: 'ngswitch',
    loadChildren: ()=> import('./ngswitch/ngswitch.module').then(m => m.NgswitchModule)
  },
  {
    path: 'ngelse',
    loadChildren: ()=> import('./ngelse/ngelse.module').then(m => m.NgelseModule)
  },
  {
    path: 'input-property-binding',
    loadChildren: ()=> import('./input-property-binding/input-property-binding.module').then(m => m.InputPropertyBindingModule)
  },
  {
    path: 'diretivas-customizadas',
    loadChildren: ()=> import('./diretivas-customizadas/diretivas-customizadas.module').then(m => m.DiretivasCustomizadasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
