import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  constructor() { }
  mostrarCursos: any
  cursos: string[] = ['Angular', 'Java', 'C#', 'PHP']

  ngOnInit(): void {
  }

  onMostrar(){
    this.mostrarCursos = !this.mostrarCursos
  }

}
