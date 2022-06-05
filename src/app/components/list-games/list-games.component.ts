import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { defaultGameModelEntity, GameListModel, GameModel } from 'src/app/models/game-model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {
  public games: GameListModel = [];
  public sortBy: string = '';

  constructor(private http: HttpClient) {
    this.http.get("assets/games/game-list.json").subscribe(async data => {
      await this.getGameInfoList((<any>data).games);
      this.sortByName('name');
    });
  }

  ngOnInit(): void {
  }

  async getGameInfoList(list: GameListModel) {
    for (let i = 0; i < list.length; i++) {
      let game: any = await this.http.get(`assets/games/games-json/${list[i].id}.json`).toPromise();
      this.games.push(game);
    };
  }

  sortByRating(type: string) {
    this.sortBy = type === 'rating' ? 'rating' : 'reverse-rating';
    this.games.sort((a, b) => {
      if (this.sortBy === 'rating')
        return b.rating - a.rating;
      else
        return a.rating - b.rating;
    });
  }

  sortByName(type: string) {
    this.sortBy = type === 'name' ? 'name' : 'reverse-name';
    this.games.sort((a, b) => {
      if (this.sortBy === 'name')
        return a.title.localeCompare(b.title);
      else
        return b.title.localeCompare(a.title);
    });
  }

  gotoGame(game: GameModel) {
    if (!game)
      return;
    
  }
}
