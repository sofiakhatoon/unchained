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

    for (let username of this.users) {

      this.twitchService
        .getChannelInfo(username.x)

        .pipe(
          tap(x => username.y = x.users[0]._id),


          flatMap(resx =>
            this.twitchService.getChannelStream(username.y)
          )



        )
        .subscribe(res2 => {

          const item: Twchannel = {
            username: username.x,
            stream: res2.stream,
            _id: username.y,
            embed: '<iframe src="https://player.twitch.tv/?channel=' + username + '" frameborder="0" allowfullscreen="true" scrolling="no" height="380px" width="100%"> </iframe>',
            offlineImg: res2.stream == null ? "../../../assets/img/streams.jpg" : null,
            videos: null

          };

          this.TwchannelArray.push(item);
          this.TwchannelArray.sort((val1, val2) => {
            return (
              <any>new Date(val2.stream != null ? val2.stream.created_at : '1970-01-01') - <any>new Date(val1.stream != null ? val1.stream.created_at : '1970-01-01')
            );
          });
          this.itemsStream = this.TwchannelArray;

          console.log(this.itemsStream[0]);
        });
    }
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
