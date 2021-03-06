import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../../models/game-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-game-test',
  templateUrl: './video-game-test.component.html',
  styleUrls: ['./video-game-test.component.scss'],
})
export class VideoGameTestComponent implements OnInit {
  game: GameModel = {
    id: '',
    json_path: 'assets/games/games-json/',
    img_path: 'assets/games/games-pictures/',
    title: '',
    subtitle: '',
    rating: -1,
    hltb_main: '',
    hltb_extra: '',
    synopsis: '',
    summary: '',
    positive_list: [],
    positive_main: '',
    negative_list: [],
    negative_main: '',
    notes: [],
    date_added: '',
    developers: '',
    platforms: [],
  };
  ratingToDisplay: number = 0; // will increase until actual rating
  ratingSpeedInterval: number = 10; // time in milliseconds between each increment

  ratingStop: any = setInterval(() => {
    if (this.game.rating != -1) this.ratingToDisplay++;
    if (this.ratingToDisplay == this.game.rating)
      clearInterval(this.ratingStop);
  }, this.ratingSpeedInterval);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  setSyntaxHltb(str: string) {
    if (str.includes('½')) str = str.replace('½', 'H½');
    else str += 'H';
    return str;
  }

  getGameInfo(data: GameModel) {
    this.game.id = data.id;
    this.game.img_path += data.img_path;
    this.game.title = data.title;
    this.game.subtitle = data.subtitle;
    this.game.rating = data.rating;
    this.game.hltb_main = this.setSyntaxHltb(data.hltb_main);
    this.game.hltb_extra = this.setSyntaxHltb(data.hltb_extra);
    this.game.synopsis = data.synopsis;
    this.game.summary = data.summary;
    this.game.positive_main = data.positive_main;
    this.game.positive_list = data.positive_list;
    this.game.negative_main = data.negative_main;
    this.game.negative_list = data.negative_list;
    this.game.notes = data.notes;
    this.game.date_added = data.date_added;
    this.game.developers = data.developers;
    this.game.platforms = data.platforms;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.game.json_path += params.id + '.json';
      this.http.get(`${environment.url}/${this.game.json_path}`).subscribe({
        next: (data) => {
          this.getGameInfo(<GameModel>data);
        },
        error: (error) => {
          console.error('Jeu introuvable en base de données.');
          this.router.navigate(['404']);
        },
      });
    });
  }
}
