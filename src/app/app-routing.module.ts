import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
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
import { VideosCtrlComponent } from './admin/videos-ctrl/videos-ctrl.component';
import { StreamDetailsComponent } from './home/stream-videos/stream-details/stream-details.component';
import { AchievementsCtrlComponent } from './admin/achievements-ctrl/achievements-ctrl.component';
import { VideoDetailsComponent } from './home/stream-videos/video-details/video-details.component';
import { TwitchchannelsCtrlComponent } from './admin/twitchchannels-ctrl/twitchchannels-ctrl.component';
import { UsersCtrlComponent } from './admin/users-ctrl/users-ctrl.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Teams', component: NavComponent, children: [{ path: '', component: TeamsComponent }] },
  { path: 'Gallery', component: NavComponent, children: [{ path: '', component: GalleryComponent }] },
  { path: 'Partners', component: NavComponent, children: [{ path: '', component: PartnersComponent }] },
  { path: 'Streams', component: NavComponent, children: [{ path: '', component: StreamsComponent }] },
  { path: 'Videos', component: NavComponent,children: [{ path: '', component: VideoComponent }] },
  { path: 'Streams-Details/:username', component: NavComponent,children: [{ path: '', component: StreamDetailsComponent }] },
  { path: 'Video-Details/:title/:id/:source', component: NavComponent,children: [{ path: '', component: VideoDetailsComponent }] },

  { path: 'Ctrl', component: OthernavComponent,children: [{ path: '', component: AdminComponent }],canActivate:[LoginGuard] },
  { path: 'Streams-control', component: OthernavComponent,children: [{ path: '', component:StreamsCtrlComponent }],canActivate:[LoginGuard] },
  { path: 'Videos-control', component: OthernavComponent,children: [{ path: '', component:VideosCtrlComponent }],canActivate:[LoginGuard] },
  { path: 'Achievements-control', component: OthernavComponent,children: [{ path: '', component:AchievementsCtrlComponent }],canActivate:[LoginGuard] },
  { path: 'TwitchChannels-control', component: OthernavComponent,children: [{ path: '', component:TwitchchannelsCtrlComponent }],canActivate:[LoginGuard] },
  { path: 'Users-control', component: OthernavComponent,children: [{ path: '', component:UsersCtrlComponent }],canActivate:[LoginGuard] },
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
