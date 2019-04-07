import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { Achievements } from '../models/achievements';
import { Games } from '../models/games';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  providers: [AchievementsService,GamesService]
})
export class AchievementsComponent implements OnInit {

  constructor(private achievementsService: AchievementsService,private gamesService:GamesService) { 

    this.gamesService.getGames().subscribe(data=>{
      this.games=data;

    });
    

  }

  items: Achievements[] = [];
  games:Games[];
  

  ngOnInit() {
    this.getArchByGameId(1); //dota2
    
  }

  

  getArchByGameId(gameid: number) {
    this.achievementsService.getAchievements(gameid).subscribe(data => {

      console.log(data);
      this.items=[];
      for (let item of data) {

        const array: Achievements = {

          achievement_id:item.achievement_id,
          achievement_date: item.achievement_date,
          achievement_imgurl: item.achievement_imgurl,
          achievement_place: item.achievement_place.trim(),
          achievement_prize: item.achievement_prize,
          achievement_status: item.achievement_status,
          achievement_tournament: item.achievement_tournament,
          game_id:item.game_id,
          games:item.games
        };
        this.items.push(array);
      }


    });
  }



}
