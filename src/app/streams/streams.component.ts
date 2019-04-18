import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../services/twitch.service';
import { Twchannel } from '../models/Twchannel';
import { tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  users: any[] = [{ x: "zaferkrk96", y: null }, { x: "unchainedesports", y: null }];
 
  constructor(   private twitchService: TwitchService
    ) { }

 
    itemsStream = [];
    TwchannelArray: Twchannel[] = [];
    end=8;
   moreBtn=true;
  ngOnInit() {
   
    let ChannelID: any;
    let Videos: any;
    this.TwchannelArray = [];

    this.twitchService.getChannelsForClient().subscribe(data=>{
      for(let x of data){
        this.twitchService.getChannelStream(x.twitch_channel_id.toString()).subscribe(res2=>{
          //console.log(res2);
    
          const item: Twchannel = {
            username: x.twitch_channel_name,
            stream: res2.stream,
            _id: x.twitch_channel_id,
            embed:"",
             offlineImg: res2.stream == null ? x.twitch_channel_img_url : null,
            videos: null

          };
          //console.log(x);
          this.TwchannelArray.push(item);
          this.TwchannelArray.sort((val1, val2) => {
            return (
              <any>new Date(val2.stream != null ? val2.stream.created_at : '1970-01-01') - <any>new Date(val1.stream != null ? val1.stream.created_at : '1970-01-01')
            );
          });
          this.itemsStream = this.TwchannelArray;
          this.itemsStream.sort((x, y) => {
            if (x.stream!=null) {
              return -1;
            }
            if (y.stream!=null) {
              return 1;
            }
            return 0;
          });
          //console.log(this.itemsStream[0]);
        });
      }
    
  });
  }

  clickMore(){

    if(this.itemsStream.length>this.end){
      this.end=this.end+8;
      this.moreBtn=true;

    }
   
    else{
      this.moreBtn=false;
    }
  
    }

}
