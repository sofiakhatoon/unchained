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

  items:Archievements[];
  
  ngOnInit() {

    this.achievementsService.getAchievements().subscribe(data=>{
      this.items=data;

    });
  }

}
