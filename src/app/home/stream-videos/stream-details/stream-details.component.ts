import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamsService } from 'src/app/services/streams.service';
import { Streams } from 'src/app/models/streams';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-stream-details',
  templateUrl: './stream-details.component.html',
  styleUrls: ['./stream-details.component.css']
})
export class StreamDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private streamsService:StreamsService,private eRef:ElementRef, @Inject(DOCUMENT) private document:Document) {




   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getStreamById(params["username"]);
    });

       

  }
  embed:string;
  chat:string;
  details:Streams;
  username:string;
  getStreamById(id:string) {
    this.username=id;
   this.embed='<iframe id="live" style="height:38em" src="https://player.twitch.tv/?channel='+id+'" frameborder="0" allowfullscreen="true" scrolling="no" width="100%"  ></iframe>';
    this.chat='<iframe id="chat" style="height:38em" src="https://www.twitch.tv/embed/'+id+'/chat" frameborder="0" scrolling="no" width="100%" ></iframe>';
   setTimeout(() => {
    let live=this.document.getElementById('live');
    let chat=this.document.getElementById('chat');
    if(live!=null){
      //live.style.height="38em";
    }
    if(chat!=null)
    {
      //chat.style.height="38em";
    }

   }, 1500);
  
    //iframes[0].style.height="50vw";


  }

}
