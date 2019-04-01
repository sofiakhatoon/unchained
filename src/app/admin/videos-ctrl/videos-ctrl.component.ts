import { Component, OnInit, ElementRef } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-ctrl',
  templateUrl: './videos-ctrl.component.html',
  styleUrls: ['./videos-ctrl.component.css']
})
export class VideosCtrlComponent implements OnInit {

  streams:Videos[];
  constructor(private streamsService:VideosService,private myElements:ElementRef,private sanitizer:DomSanitizer) {



    this.streamsService.getVideos().subscribe(data => {

      
      this.streams = data;
       for(let item of this.streams){
        item.video_link= item.video_link.replace("<iframe","<iframe class='forIframe'");
     


        let fragment = document.createRange().createContextualFragment(item.video_link); //creating fragment 
        let attributes=fragment.querySelector("iframe").attributes; //get attributes 
        attributes.removeNamedItem('width');//remove width attr
        attributes.removeNamedItem('height');//remove width attr
        let attr:Attr=document.createAttribute('width');
        attr.value='92%';
        attributes.setNamedItem(attr)
        item.video_link=fragment.querySelector('iframe').outerHTML; //fragment to string for html

       }
    });

   }

  ngOnInit() {
    document.body.style.backgroundColor="#fff";
    var a=document.getElementsByTagName("footer")[0].style.display="none";


  
  }

  edit(id:number){
    console.log(id);
  }
  remove(id:number){
    console.log(id);
  }

}
