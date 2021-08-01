import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  handleRouteChange(): void {
    this.selectCurrentPage(this.router.url);
  }

  selectCurrentPage(currentPage: string) {
    currentPage = currentPage.replace('/', '') + '/';
    this.isGreen = false;
    this.pages.forEach(page => {
      if (page.url === currentPage) {
        page.selected = true;
        this.isGreen = page.mustBeGreen ? true : false;
      } else
        page.selected = false;
    });
    if (currentPage.includes("test/")) {
      this.pages[0].selected = true;
      this.isGreen = true;
    }
    if (currentPage.includes("404/")) {
      this.pages[0].selected = true;
      this.isGreen = true;
    }
  }

  pages: any[] = [];
  isGreen: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  ngOnInit(): void {
    this.pages = [
      {
        name: 'Jeux vidéos',
        url: "jeux-videos/",
        selected: true,
        mustBeGreen: false
      },
      {
        name: 'À propos',
        url: "a-propos/",
        selected: false,
        mustBeGreen: false
      },
      {
        name: 'Projets',
        url: "projets/",
        selected: false,
        mustBeGreen: false
      }
    ];
    this.isGreen = false;
    this.selectCurrentPage(this.router.url);
  }
}
