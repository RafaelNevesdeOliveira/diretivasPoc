import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss'],
})
export class NgclassComponent implements OnInit {
  isFavorite: boolean = false;
  isFavorite2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  toggleFavorite2() {
    this.isFavorite2 = !this.isFavorite2;
  }
}
