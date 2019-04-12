import { Component, OnInit } from '@angular/core';
import { StreamsComponent } from '../streams/streams.component';
import { YoutubeService } from '../services/youtube.service';
import { TwitchService } from '../services/twitch.service';
import { VideosModel } from '../models/videosModel';
import { tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  users: any[] = [{ x: "zaferkrk96", y: null }, { x: "unchainedesports", y: null }];

  constructor(private twitchService: TwitchService, private youtubeService:YoutubeService) { 


  }
  itemsVideo: VideosModel[] = [];
   end=8;
  moreBTN:boolean=false;

  ngOnInit() {
 


    this.youtubeService.getChannelVideos().subscribe(data => {
      console.log(data);
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
    console.log(this.itemsVideo);
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

          if(this.itemsVideo.length>this.end){
            this.moreBTN=true;
          }

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
    }





  }
  clickMore(){
    this.end=this.end+8;
  }
   
}
