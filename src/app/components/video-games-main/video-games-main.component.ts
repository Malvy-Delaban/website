import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { GameModel, GameListModel } from 'src/app/models/game-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-games-main',
  templateUrl: './video-games-main.component.html',
  styleUrls: ['./video-games-main.component.scss']
})
export class VideoGamesMainComponent implements OnInit {
  games: GameListModel = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false,
    margin: 100,
    autoplay: true,
    autoplaySpeed: 600,
    autoplayTimeout: 3000,
    stagePadding: 150,
    autoHeight: false,
    autoWidth: false,
  }

  constructor(private http: HttpClient) {
    this.http.get("/assets/games/game-list.json").subscribe(data => {
      this.getGameInfoList((<any>data).games);
    });
  }

  getGameInfoList(data: GameListModel) {
    data.forEach(game => {
      let newGame : GameModel = {
        id: "",
        json_path: "/assets/games/games-json/",
        img_path: "../../../assets/games/games-pictures/",
        title: "",
        subtitle: "",
        rating: 0,
        hltb_main: "",
        hltb_extra: "",
        synopsis: "",
        summary: "",
        positive_list: [],
        positive_main: "",
        negative_list: [],
        negative_main: "",
        notes: [],
        date_added: "",
        developers: "",
        platforms: []
      };
      newGame.id = game.id;
      newGame.img_path += game.img_path;
      newGame.title = game.title;
      newGame.subtitle = game.subtitle;
      this.games.push(newGame);
    });
  }

  ngOnInit(): void {
  }

}
