import { Component, OnInit, Inject, ViewEncapsulation, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TwitchChannelsAddEdit } from 'src/app/models/TwitchChannelsAddEdit';
import { TwitchService } from 'src/app/services/twitch.service';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-modalfortwitchctrl',
  templateUrl: './modalfortwitchctrl.component.html',
  styleUrls: ['./modalfortwitchctrl.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[TwitchService]
})
export class ModalfortwitchctrlComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ModalfortwitchctrlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private twitchService:TwitchService,
    private ref:ElementRef
  ) { }
  addItems: TwitchChannelsAddEdit = new TwitchChannelsAddEdit();
  players:Player[];
  playersByGame:Player[];
  ngOnInit() {
    this.addItems.game_id = 0;
    this.addItems.player_id=0;
    console.log(this.data);
    this.players=this.data.players;
  }
  public close() {
    this.matDialogRef.close();
  }

  add() {
    if(!this.addItems.twitch_channel_name){alert("Name required"); return null;}
    this.twitchService.getChannelInfo(this.addItems.twitch_channel_name).subscribe(data=>{

      this.addItems.twitch_channel_id=data.users[0]._id;
      this.twitchService.addChannels(this.addItems).subscribe(
        x => {
          if (x) {
            this.matDialogRef.close();
            alert("Successful add");
          }
        },
        error => {
          alert("Error Message: Fill in the required fields");
        }
      );
  })




  }
  isDisabled:boolean=true;
  onChangeGame(event){
    if(event.target.value==0){return;}
    let value=parseInt(event.target.value);
    this.playersByGame=this.players.filter(f=>f.game_id===value);
      this.isDisabled=false;
  
  }

}
