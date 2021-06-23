import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesMainComponent } from './video-games-main/video-games-main.component';
import { LearnMoreButtonComponent } from './learn-more-button/learn-more-button.component';

const routes: Routes = [
  {path: 'video-games' , component: VideoGamesMainComponent},
  {path: 'video-games/final-fantasy-7-remake' , component: LearnMoreButtonComponent},
  {path: '**', redirectTo: 'video-games'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
