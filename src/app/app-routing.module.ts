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


const routes: Routes = [
  { path: 'Home', component:HomeComponent },
  { path: 'Teams', component:TeamsComponent },
  { path: 'Calendar', component:CalendarComponent },
  { path: 'Fixture', component:FixtureComponent },
  { path: 'Gallery', component:GalleryComponent },
  { path: 'Partners', component:PartnersComponent },
  { path: 'Streams', component:StreamsComponent },
  { path: 'Videos', component:VideoComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
