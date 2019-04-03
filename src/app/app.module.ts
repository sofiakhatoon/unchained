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
import { PartnersComponent } from './partners/partners.component';
import { StreamsComponent } from './streams/streams.component';
import { VideoComponent } from './video/video.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { OthernavComponent } from './othernav/othernav.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './app_classes/login.guard';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LeftsidebarComponent } from './admin/leftsidebar/leftsidebar.component';
import { StreamsCtrlComponent } from './admin/streams-ctrl/streams-ctrl.component';
import { SafePipe } from './pipe/safe.pipe';
import { VideosCtrlComponent } from './admin/videos-ctrl/videos-ctrl.component';
import { StreamDetailsComponent } from './home/stream-videos/stream-details/stream-details.component';
import { IconControlPipe } from './pipe/iconControl.pipe';






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
      FooterComponent,
      PartnersComponent,
      StreamsComponent,
      VideoComponent,
      AdminComponent,
      LoginComponent,
      OthernavComponent,
      LeftsidebarComponent,
      StreamsCtrlComponent,
      VideosCtrlComponent,
      StreamDetailsComponent,
      SafePipe,
      IconControlPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      FormsModule
   ],
   providers: [
      InstagramService,LoginGuard,AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
