import { Component, OnInit } from '@angular/core';
import { Twchannel } from 'src/app/models/Twchannel';
import { TwitchService } from 'src/app/services/twitch.service';
import { tap, flatMap } from 'rxjs/operators';
import { YoutubeService } from 'src/app/services/youtube.service';
import { VideosModel } from 'src/app/models/videosModel';

@Component({
  selector: 'app-videosHome',
  templateUrl: './videosHome.component.html',
  styleUrls: ['./videosHome.component.css']
})
export class VideosHomeComponent implements OnInit {
  users: any[] = [{ x: "zaferkrk96", y: null }, { x: "unchainedesports", y: null }];
  constructor(private twitchService: TwitchService, private youtubeService: YoutubeService) { }
  itemsVideo: VideosModel[] = [];
  ngOnInit() {
    this.youtubeService.getChannelVideos().subscribe(data => {
      //console.log(data);
      for (let y of data.items) {


        const item: VideosModel = {
          title: y.snippet.title,
          des: y.snippet.description,
          channelId: y.snippet.channelId,
          videoId: y.id.videoId,
          img: y.snippet.thumbnails.high.url,
          insertdate: y.snippet.publishedAt,
          source: "youtube"

        };
        
        this.itemsVideo.push(item);

      }
    });
    //console.log(this.itemsVideo);

    this.twitchService.getChannelsForClient().subscribe(data=>{

      for(let x of data){
        this.twitchService.getChannelVideos(x.twitch_channel_id.toString()).subscribe(res2=>{
          for (let x of res2.videos) {

            if(x.thumbnails.small.length<1){
              continue;
            }
            const item: VideosModel = {
              title: x.title,
              des: x.description,
              channelId: x.channel._id,
              videoId: x._id,
              img: x.preview.large,
              insertdate: x.published_at,
              source: "twitch"

            };
            // console.log(x._id);
            this.itemsVideo.push(item);
          }
        });
      }

    });

    /*for (let username of this.users) {

      this.twitchService
        .getChannelInfo(username.x)

        .pipe(
          tap(x => username.y = x.users[0]._id),


          flatMap(resx =>
            this.twitchService.getChannelVideos(username.y)
          )



        )
        .subscribe(res2 => {

 

          for (let x of res2.videos) {

            if(x.thumbnails.small.length<1){
              continue;
            }
            const item: VideosModel = {
              title: x.title,
              des: x.description,
              channelId: x.channel._id,
              videoId: x._id,
              img: x.preview.large,
              insertdate: x.published_at,
              source: "twitch"

            };
            // console.log(x._id);
            this.itemsVideo.push(item);
          }

          //console.log(this.itemsVideo);
        });
    }*/


  }

}
