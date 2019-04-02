import { Component, OnInit } from '@angular/core';
import { Fixture } from '../models/fixture';
import { formatDate, DatePipe } from '@angular/common';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  providers: [RouterService]
})
export class FixtureComponent implements OnInit {

  constructor(private routerService: RouterService, private matchesService: MatchesService) {

    this.resizeFixture();
  }
  items: Fixture[] = [];
  littleItem: Fixture[] = [];
  sliceStart: number = 0;
  sliceEnd: number;

  ngOnInit() {
    this.matchesService.getAllMatches().subscribe(data => {
 
      for(let dataitem of data){
        let startFullDate=new Date(dataitem.start_time);
        console.log(startFullDate);
        let startDate=startFullDate.getUTCDate();
        let startTime=startFullDate.getHours()+":"+startFullDate.getMinutes();
        console.log(startTime);
        const item: Fixture = {
          id:-1,
          homeTeam: "Unchained",
          awayTeam: dataitem.opposing_team_name,
          awayTeamScore: 1,
          homeTeamScore: 2,
          timestamp: dataitem.start_time ,
          game: 0
    
        };
        this.items.push(item);
    
      }


      console.log(data);
    });







  }
  resizeFixture() {
    this.routerService.getNavigationEndUrl().subscribe(x => {
      console.log(x.url);
      if (x.url.toLocaleLowerCase().includes('/home') || x.url.toLocaleLowerCase() == '/') {
        this.sliceEnd = 5;
      } else {
        this.sliceEnd = 500;
      }
      console.log(this.sliceEnd);



    }

    );
  }

}
