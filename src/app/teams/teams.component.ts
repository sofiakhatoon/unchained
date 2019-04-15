import { Component, OnInit } from '@angular/core';
import { Games } from '../models/games';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private gamesService:GamesService) { 
    this.gamesService.getGames().subscribe(data=>{
      this.games=data;
      console.log(this.games);

    });

  }
  games:Games[];
  ngOnInit() {
  }

}
