import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  handleRouteChange(): void {
    this.selectCurrentPage(this.router.url);
    // if (this.router.url === "/a-propos") {
    //   this.isGreen = false;
    //   this.pages[1]["selected"] = true;
    // } else if (this.router.url === "/jeux-videos") {
    //   this.isGreen = true;
    //   this.pages[0]["selected"] = true;
    // } else {
    //   this.isGreen = true;
    //   console.log(this.isGreen);
    // }
  }

  selectCurrentPage(currentPage: string) {
    console.log(currentPage);
    currentPage = currentPage.replace('/', '');
    currentPage += '/';
    console.log(currentPage);
    console.log(this.pages);
    this.isGreen = true;
    this.pages.forEach(page => {
      if (page.url === currentPage) {
        page.selected = true;
        this.isGreen = page.mustBeGreen ? true : false;
      } else
        page.selected = false;
    });
    if (currentPage.includes("test/"))
      this.pages[0].selected = true;
    console.log(this.pages);
  }

  pages: any[] = [];
  isGreen: boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  ngOnInit(): void {
    this.pages = [
      {
        name: 'Jeux vidéos',
        url: "jeux-videos/",
        selected: true,
        mustBeGreen: true
      },
      {
        name: 'À propos',
        url: "a-propos/",
        selected: false,
        mustBeGreen: false
      },
      {
        name: 'Projets',
        url: "",
        selected: false,
        mustBeGreen: true
      }
    ];
  }
}
