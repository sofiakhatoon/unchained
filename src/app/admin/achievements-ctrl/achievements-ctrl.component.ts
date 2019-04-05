import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/services/achievements.service';
import { GamesService } from 'src/app/services/games.service';
import { Games } from 'src/app/models/games';
import { Achievements } from 'src/app/models/achievements';

@Component({
  selector: 'app-achievements-ctrl',
  templateUrl: './achievements-ctrl.component.html',
  styleUrls: ['./achievements-ctrl.component.css'],
  providers: [AchievementsService,GamesService]
})
export class AchievementsCtrlComponent implements OnInit {

  constructor(private achievementsService: AchievementsService,private gamesService:GamesService) { 

    this.gamesService.getGames().subscribe(data=>{
      this.games=data;

    });

  }
  items: Achievements[] = [];


  games:Games[];
  prizeboolean:boolean;
 //filterItems:Archievements[];
  /*
  private _searchTerm:string;
  get searchTerm():string{
    return this._searchTerm;
  }
  set searchTerm(value:string){
    this._searchTerm=value;
    this.filterItems=this.filterItem(value);
  }

  filterItem(searchString:string){
    
    return this.items.filter(x=>x.achievement_tournament.toLowerCase().indexOf(searchString.toLowerCase())!==-1);
  }*/


  ngOnInit() {

    this.getArchByGameId(1);
  }

  prizeBooleanForFilter(){

   if(!this.prizeboolean){
    this.prizeboolean=true;
   }else{
    this.prizeboolean=false;
   }
    
   console.log("sdsdsad:"+ this.prizeboolean);

  }

  getArchByGameId(gameid: number) {
    this.achievementsService.getAchievements(gameid).subscribe(data => {

      console.log(data);
      for (let item of data) {

        const array: Achievements = {
          achievement_date: item.achievement_date,
          achievement_imgurl: item.achievement_imgurl,
          achievement_place: item.achievement_place.trim(),
          achievement_prize: item.achievement_prize,
          achievement_status: item.achievement_status,
          achievement_tournament: item.achievement_tournament
        };
        this.items.push(array);
      }


    });
  }

}
