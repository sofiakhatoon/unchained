import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private eRef:ElementRef, @Inject(DOCUMENT) private document:Document) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getStreamById(params["id"]);
    });

  }

  embed:string;
  chat:string;
  getStreamById(id:string) {
   this.embed='<iframe id="video" src="https://player.twitch.tv/?autoplay=false&video='+id+'" frameborder="0" allowfullscreen="true" scrolling="no" width="100%"></iframe>';
    setTimeout(() => {
    let video=this.document.getElementById('video');
    if(video!=null){
      video.style.height="30vw";
    }
    

   }, 1500);
  
    //iframes[0].style.height="50vw";


  }


}
