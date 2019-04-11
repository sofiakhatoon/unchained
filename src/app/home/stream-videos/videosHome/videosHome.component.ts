import { Component, OnInit } from '@angular/core';
import { Twchannel } from 'src/app/models/Twchannel';
import { TwitchService } from 'src/app/services/twitch.service';
import { tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-videosHome',
  templateUrl: './videosHome.component.html',
  styleUrls: ['./videosHome.component.css']
})
export class VideosHomeComponent implements OnInit {
  users: any[] = [{ x: "zaferkrk96", y: null }, { x: "unchainedesports", y: null }];
  constructor(private twitchService:TwitchService ) { }
  itemsVideo=[];
  ngOnInit() {

    for (let username of this.users) {

      this.twitchService
        .getChannelInfo(username.x)

        .pipe(
          tap(x => username.y = x.users[0]._id),


          flatMap(resx =>
            this.twitchService.getChannelVideos(username.y)
          )



        )
        .subscribe(res2 => {

      

          for(let x of res2.videos){
            this.itemsVideo.push(x);
          }
         
          console.log(   this.itemsVideo);
        });
    }

  }

}
