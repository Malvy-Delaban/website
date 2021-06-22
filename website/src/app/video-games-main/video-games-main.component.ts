import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-video-games-main',
  templateUrl: './video-games-main.component.html',
  styleUrls: ['./video-games-main.component.scss']
})
export class VideoGamesMainComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      950: {
        items: 2
      }
    },
    nav: false,
    margin: 100,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayTimeout: 3000,
    stagePadding: 200,
    autoHeight: false,
    autoWidth: false,
  }

  images: Array<{id: string, path: string, alt: string}> = [
    {id: "final-fantasy-7-remake", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "1", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "2", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "3", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "4", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "5", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
    {id: "6", path: '../assets/games/ff7r.jpg', alt: "Final fantasy 7 Remake"},
];

  constructor() { }

  ngOnInit(): void {
  }

}
