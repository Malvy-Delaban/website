import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesMainComponent } from './components/video-games-main/video-games-main.component';
import { VideoGameTestComponent } from './components/video-game-test/video-game-test.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {path: 'a-propos' , component: AboutMeComponent},
  {path: 'jeux-videos' , component: VideoGamesMainComponent},
  {path: 'test/:id' , component: VideoGameTestComponent},
  {path: '**', redirectTo: 'jeux-videos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', // or 'top'
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
