import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesMainComponent } from './components/video-games-main/video-games-main.component';
import { VideoGameTestComponent } from './components/video-game-test/video-game-test.component';

const routes: Routes = [
  {path: 'jeux-videos' , component: VideoGamesMainComponent},
  {path: 'test/:id' , component: VideoGameTestComponent},
  {path: '**', redirectTo: 'jeux-videos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // or 'top'
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0] // [x, y] - adjust scroll offset
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
