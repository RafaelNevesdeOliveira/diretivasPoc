import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    HighlightMouseDirective,
    FundoAmareloDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightMouseDirective,
    FundoAmareloDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
