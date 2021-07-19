import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../../models/game-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-game-test',
  templateUrl: './video-game-test.component.html',
  styleUrls: ['./video-game-test.component.scss']
})
export class VideoGameTestComponent implements OnInit {
  game: GameModel = {
    id: "",
    json_path: environment.url + "/assets/games/games-json/",
    img_path: "../../../assets/games/games-pictures/",
    title: "",
    subtitle: "",
    note: 0,
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.game.json_path += params.id + ".json";
      this.http.get(this.game.json_path).subscribe(data => {
        this.getGameInfo(<GameModel>data);
      });
    });
  }

  getGameInfo(data: GameModel) {
    this.game.id = data.id;
    this.game.img_path += data.img_path;
    this.game.title = data.title;
    this.game.subtitle = data.subtitle;
    this.game.note = data.note;
  }

  ngOnInit(): void {
  }

}
