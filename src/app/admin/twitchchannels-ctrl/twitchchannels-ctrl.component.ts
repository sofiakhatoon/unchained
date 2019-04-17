import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ModalfortwitchctrlComponent} from './modalfortwitchctrl/modalfortwitchctrl.component';
import { Games } from 'src/app/models/games';
import { GamesService } from 'src/app/services/games.service';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/models/player';
import { TwitchChannelsAddEdit } from 'src/app/models/TwitchChannelsAddEdit';
import { TwitchService } from 'src/app/services/twitch.service';


@Component({
  selector: 'app-twitchchannels-ctrl',
  templateUrl: './twitchchannels-ctrl.component.html',
  styleUrls: ['./twitchchannels-ctrl.component.css'],
  providers:[GamesService,PlayersService]
})
export class TwitchchannelsCtrlComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private gamesService: GamesService,
    private playersService:PlayersService,
    private twitchService:TwitchService
    
    ) { 

      this.gamesService.getGamesForAdmin().subscribe(data => {
        this.games = data;
      });
      this.playersService.getPlayers().subscribe(data => {
        this.players = data;
      });
      this.twitchService.getChannels().subscribe(data=>{
        console.log(data);
        this.twchannels=data;
      })

    }

    games: Games[];
    players:Player[];
    twchannels:TwitchChannelsAddEdit[];

  public openModalForTwitchChannels() {
    this.dialog.open(ModalfortwitchctrlComponent, { data: { games: this.games, editBTN: false,players:this.players } });
  }
  
  public openEditModal(id: number) {
    //console.log(this.items.filter(f => f.achievement_id == id) );
    //this.dialog.open(ModalfortwitchctrlComponent, { data: { games: this.games, editBTN: true, edititem: this.items.filter(f => f.achievement_id == id) } });
  }
  ngOnInit() {
  }

}
