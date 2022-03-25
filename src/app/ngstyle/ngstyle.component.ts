import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {

  isActive: boolean = true;
  isActive2: boolean = true;
  tamanhoFonte: number = 30;
  changeText: string = '';
  tamanhoFonte2: number = 30;
  changeText2: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.isActive = !this.isActive;
  }
  mudarAtivo2(){
    this.isActive2 = !this.isActive2;
  }

}
