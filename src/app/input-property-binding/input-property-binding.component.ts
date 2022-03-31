import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-binding',
  templateUrl: './input-property-binding.component.html',
  styleUrls: ['./input-property-binding.component.scss']
})
export class InputPropertyBindingComponent implements OnInit {


  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
