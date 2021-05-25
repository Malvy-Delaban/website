import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.pages = [
      {
        name: 'Jeux vidéos',
        selected: true
      },
      {
        name: 'À propos',
        selected: false
      },
      {
        name: 'Projets',
        selected: false
      }
    ];
  }
}
