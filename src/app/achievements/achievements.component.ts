import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { Archievements } from '../models/archievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  providers:[AchievementsService]
})
export class AchievementsComponent implements OnInit {

  constructor(private achievementsService:AchievementsService) { }

  items:Archievements[]=[];
  color=["#ffd400","#00ff08","#00e7ff","#ff0c00","#680be4"];
  
  ngOnInit() {

    this.achievementsService.getAchievements().subscribe(data=>{

      console.log(data);
      for(let item of data){
       
        const array: Archievements = {
          achievement_date:item.achievement_date,
          achievement_imgurl:item.achievement_imgurl,
          achievement_place:item.achievement_place.trim(),
          achievement_prize:item.achievement_prize,
          achievement_status:item.achievement_status,
          achievement_tournament:item.achievement_tournament
        };
        this.items.push(array);
      }
      
    
    });
  }

}
