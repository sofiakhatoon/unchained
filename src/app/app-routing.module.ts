import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FixtureComponent } from './fixture/fixture.component';


const routes: Routes = [
  { path: 'Home', component:HomeComponent },
  { path: 'Teams', component:TeamsComponent },
  { path: 'Calendar', component:CalendarComponent },
  { path: 'Fixture', component:FixtureComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
