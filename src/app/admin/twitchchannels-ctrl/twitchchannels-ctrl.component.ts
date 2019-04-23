import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ModalfortwitchctrlComponent} from './modalfortwitchctrl/modalfortwitchctrl.component';
import { Games } from 'src/app/models/games';
import { GamesService } from 'src/app/services/games.service';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/models/player';
import { TwitchChannelsAddEdit } from 'src/app/models/TwitchChannelsAddEdit';
import { TwitchService } from 'src/app/services/twitch.service';
import { TwchannelsGameIdToNameConvertPipe } from 'src/app/pipe/twchannelsGameIdToNameConvert.pipe';


@Component({
  selector: 'app-twitchchannels-ctrl',
  templateUrl: './twitchchannels-ctrl.component.html',
  styleUrls: ['./twitchchannels-ctrl.component.css'],
  providers:[GamesService,PlayersService]})
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
     
           this.twchannels=data;
      })

    }

    games: Games[];
    players:Player[];
    searchTerm:string;
    searchTermByID:string;
    twchannels:TwitchChannelsAddEdit[];

  public openModalForTwitchChannels() {
    this.dialog.open(ModalfortwitchctrlComponent, { data: { games: this.games, editBTN: false,players:this.players } });
  }
  public openEditModalForTwitchChannels(id:number) {
    this.dialog.open(ModalfortwitchctrlComponent, { data: { games: this.games, editBTN: true,players:this.players,edititem:this.twchannels.filter(f=>f.id==id) } });
  }
  delete(id: number) {

    let c = this.twitchService.delete(this.twchannels.filter(f => f.id == id)[0]);
    this.twchannels = this.twchannels.filter(f => f.id != id);

  }

 

  ngOnInit() {
  }

}
