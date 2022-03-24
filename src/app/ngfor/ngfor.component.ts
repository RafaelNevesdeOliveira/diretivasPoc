import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent implements OnInit {
  cursos: any[] = [
    {
      id: 1,
      nome: 'Angular 2',
    },
    {
      id: 2,
      nome: 'Ruby',
    },
    {
      id: 3,
      nome: 'React',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
