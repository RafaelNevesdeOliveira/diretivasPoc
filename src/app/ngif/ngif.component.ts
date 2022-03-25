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

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
  }

  ngOnInit(): void {
  }

  onMostrar(){
    this.mostrarCursos = !this.mostrarCursos
  }

}
