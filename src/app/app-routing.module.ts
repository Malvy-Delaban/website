import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesMainComponent } from './components/video-games-main/video-games-main.component';
import { VideoGameTestComponent } from './components/video-game-test/video-game-test.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: 'a-propos' , component: AboutMeComponent},
  {path: 'jeux-videos' , component: VideoGamesMainComponent},
  {path: 'test/:id' , component: VideoGameTestComponent},
  {path: 'projets' , component: ProjectsComponent},
  {path: '' , component: AboutMeComponent},
  {path: '404' , component: Page404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
