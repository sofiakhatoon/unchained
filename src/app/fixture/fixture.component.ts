import { Component, OnInit } from '@angular/core';
import { Fixture } from '../models/fixture';
import { formatDate } from '@angular/common';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  providers:[RouterService]
})
export class FixtureComponent implements OnInit {

  constructor(private routerService:RouterService) { 

    this.resizeFixture();
  }
  items:Fixture[]=[];
  littleItem:Fixture[]=[];
  sliceStart:number=0;
  sliceEnd:number;


 



  ngOnInit() {



    const item:Fixture={
      id:1,
      homeTeam:"Unchained",
      awayTeam:"Team Example",
      awayTeamScore:1,
      homeTeamScore:2,
      start:"20:30",
      finish:"21:30",
      game:0

    };
    const item2:Fixture={
      id:1,
      homeTeam:"Unchained",
      awayTeam:"Team Example",
      awayTeamScore:1,
      homeTeamScore:2,
      start:"20:30",
      finish:"21:30",
      game:1

    };
    const item3:Fixture={
      id:1,
      homeTeam:"Unchained",
      awayTeam:"Team Example",
      awayTeamScore:1,
      homeTeamScore:2,
      start:"20:30",
      finish:"21:30",
      game:1

    };
    this.items.push(item);
    this.items.push(item2);
    this.items.push(item3); 
    this.items.push(item);
    this.items.push(item2);
    this.items.push(item3); 
    this.items.push(item);
    
  }
  resizeFixture(){
    this.routerService.getNavigationEndUrl().subscribe(x=> 
      {
       console.log( x.url);  
       if(x.url.toLocaleLowerCase().includes('/home') || x.url.toLocaleLowerCase()=='/' ){
       this.sliceEnd=5;
      }else{
        this.sliceEnd=30;
      }
      console.log(this.sliceEnd);



      }
      
   );
  }

}
