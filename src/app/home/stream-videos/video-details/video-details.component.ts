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
      this.getStreamById(params["id"],params["source"]);
      this.title=params["title"];
    });

  }

  embed:string;
  title:string;
  getStreamById(id:string,source:string) {
    if(source=="youtube"){
      this.embed='<iframe  width="100%" style="height:38em" id="video"   src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
 
    }else{
      this.embed='<iframe id="video" height="38em" src="https://player.twitch.tv/?autoplay=false&video='+id+'" frameborder="0" allowfullscreen="true" scrolling="no" width="100%"></iframe>';
 
    }
      setTimeout(() => {
    let video=this.document.getElementById('video');
    if(video!=null){
      //video.style.height="38em";
    }
    

   }, 1500);
  
    //iframes[0].style.height="50vw";


  }


}
