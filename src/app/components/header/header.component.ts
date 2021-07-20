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
        url: "jeux-videos/",
        selected: true
      },
      {
        name: 'À propos',
        url: "",
        selected: false
      },
      {
        name: 'Projets',
        url: "",
        selected: false
      }
    ];
  }
}
