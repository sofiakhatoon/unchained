import { Component, OnInit } from "@angular/core";
import { AchievementsService } from "src/app/services/achievements.service";
import { GamesService } from "src/app/services/games.service";
import { Games } from "src/app/models/games";
import { Achievements } from "src/app/models/achievements";
import { ModalComponent } from "../modal/modal.component";
import { MatDialog } from "@angular/material";
import { AchievementsAddEdit } from "src/app/models/achievementsAddEdit";

@Component({
  selector: "app-achievements-ctrl",
  templateUrl: "./achievements-ctrl.component.html",
  styleUrls: ["./achievements-ctrl.component.css"],
  providers: [AchievementsService, GamesService]
})
export class AchievementsCtrlComponent implements OnInit {
  constructor(
    private achievementsService: AchievementsService,
    private gamesService: GamesService,
    public dialog: MatDialog
  ) {
    this.gamesService.getGames().subscribe(data => {
      this.games = data;
    });
  }
  items: Achievements[] = [];

  games: Games[];
  prizeboolean: boolean;

  ngOnInit() {
    this.getAchAll();
  }
  public openModal() {
    this.dialog.open(ModalComponent);
  }
  prizeBooleanForFilter() {
    if (!this.prizeboolean) {
      this.prizeboolean = true;
    } else {
      this.prizeboolean = false;
    }
  }

  gameId: number = 0;

  getAchAll() {
    this.achievementsService.getAchievementsForAdminPanel().subscribe(data => {
      for (let item of data) {
        const array: Achievements = {
          achievement_id:item.achievement_id,
          achievement_date: item.achievement_date,
          achievement_imgurl: item.achievement_imgurl,
          achievement_place: item.achievement_place.trim(),
          achievement_prize: item.achievement_prize,
          achievement_status: item.achievement_status,
          achievement_tournament: item.achievement_tournament,
          game_id: item.game_id,
          games: item.games
        };
        this.items.push(array);
      }
    });
  }

  delete(id:number){
  
    let c=this.achievementsService.delete(this.items.filter(f=>f.achievement_id==id)[0]);
    this.items=this.items.filter(f=>f.achievement_id!=id);
   
  }


}
