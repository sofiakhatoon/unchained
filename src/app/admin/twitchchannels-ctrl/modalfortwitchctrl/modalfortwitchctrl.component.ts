import { Component, OnInit, Inject, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TwitchChannelsAddEdit } from 'src/app/models/TwitchChannelsAddEdit';
import { TwitchService } from 'src/app/services/twitch.service';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-modalfortwitchctrl',
  templateUrl: './modalfortwitchctrl.component.html',
  styleUrls: ['./modalfortwitchctrl.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TwitchService]
})
export class ModalfortwitchctrlComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ModalfortwitchctrlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private twitchService: TwitchService,
    private ref: ElementRef
  ) { }
  addItems: TwitchChannelsAddEdit = new TwitchChannelsAddEdit();
  players: Player[];
  playersByGame: Player[];
  ngOnInit() {
    this.addItems.game_id = 0;
    this.addItems.player_id = 0;

    this.players = this.data.players;
    if (this.data.edititem) {
      this.addItems = this.data.edititem[0];

      this.isDisabled=false;
      
      this.playersByGame = this.players.filter(f => f.game_id === this.addItems.game_id);
     
    }

  }
  public close() {
    this.matDialogRef.close();
  }
  @ViewChild("fileInput") fileInput;
  add() {

    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.addItems.myfile = fileBrowser.files[0];
    }

    
    if (!this.addItems.twitch_channel_name) { alert("Name required"); return null; }
    this.twitchService.getChannelInfo(this.addItems.twitch_channel_name).subscribe(data => {

      if (!data) {
        return alert("Wrong Username");
      }
      if (!data.users) {
        return alert("Wrong Username");
      }
      if (data.users.length < 1) {
        return alert("Wrong Username");
      }
      this.addItems.twitch_channel_id = data.users[0]._id;
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
  edit() {

    console.log(this.addItems);
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.addItems.myfile = fileBrowser.files[0];
    }
    this.twitchService.edit(this.addItems) .subscribe(
      data => {
        if (data) {
          alert("Successful update");
        }
      },
      error => {
        alert("Error Message: Fill in the required fields");
      }
    );

  }
  isDisabled: boolean = true;
  onChangeGame(event) {
    if (event.target.value == 0) { return; }
    let value = parseInt(event.target.value);
    this.playersByGame = this.players.filter(f => f.game_id === value);
    this.isDisabled = false;

  }

}
