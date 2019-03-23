import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TeamsComponent } from './teams/teams.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StreamVideosComponent } from './home/stream-videos/stream-videos.component';
import { NewsComponent } from './home/news/news.component';
import { CalendarMinComponent } from './home/news/calendar-min/calendar-min.component';
import { FixtureComponent } from './fixture/fixture.component';
import { OurTeamsComponent } from './home/our-teams/our-teams.component';
import { InstagramComponent } from './home/instagram/instagram.component';

import { InstagramService } from './services/instagram.service';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';






@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SliderComponent,
      NavComponent,
      TeamsComponent,
      TeamsComponent,
      CalendarComponent,
      StreamVideosComponent,
      NewsComponent,
      AnimateComponent,
      CalendarMinComponent,
      FixtureComponent,
      OurTeamsComponent,
      GalleryComponent,
      InstagramComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule
   ],
   providers: [
      InstagramService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
