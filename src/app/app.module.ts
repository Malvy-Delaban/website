import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoGamesMainComponent } from './components/video-games-main/video-games-main.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module'
import { LearnMoreButtonComponent } from './components/learn-more-button/learn-more-button.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { VideoGameTestComponent } from './components/video-game-test/video-game-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoGamesMainComponent,
    LearnMoreButtonComponent,
    FooterComponent,
    VideoGameTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
