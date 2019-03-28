import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FixtureComponent } from './fixture/fixture.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartnersComponent } from './partners/partners.component';
import { StreamVideosComponent } from './home/stream-videos/stream-videos.component';
import { StreamsComponent } from './streams/streams.component';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { OurTeamsComponent } from './home/our-teams/our-teams.component';
import { SliderComponent } from './home/slider/slider.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { OthernavComponent } from './othernav/othernav.component';
import { LoginGuard } from './app_classes/login.guard';
import { StreamsCtrlComponent } from './admin/streams-ctrl/streams-ctrl.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Teams', component: NavComponent, children: [{ path: '', component: TeamsComponent }] },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Fixture', component: NavComponent,children: [{ path: '', component: FixtureComponent }] },
  { path: 'Gallery', component: NavComponent, children: [{ path: '', component: GalleryComponent }] },
  { path: 'Partners', component: NavComponent, children: [{ path: '', component: PartnersComponent }] },
  { path: 'Streams', component: NavComponent, children: [{ path: '', component: StreamsComponent }] },
  { path: 'Videos', component: NavComponent,children: [{ path: '', component: VideoComponent }] },
  { path: 'Ctrl', component: OthernavComponent,children: [{ path: '', component: AdminComponent }],canActivate:[LoginGuard] },
  { path: 'Streams-control', component: OthernavComponent,children: [{ path: '', component:StreamsCtrlComponent }],canActivate:[LoginGuard] },
  {path:'Auth',component:LoginComponent},
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

  }

}
