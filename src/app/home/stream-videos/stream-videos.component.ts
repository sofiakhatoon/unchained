import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterService } from 'src/app/services/router.service';
import { StreamsService } from 'src/app/services/streams.service';
import { VideosService } from 'src/app/services/videos.service';


@Component({
  selector: 'app-stream-videos',
  templateUrl: './stream-videos.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.7s', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.7s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  styleUrls: ['./stream-videos.component.css'],
  providers:[RouterService]
})
export class StreamVideosComponent implements OnInit {

  constructor(private routerService:RouterService,private myElement: ElementRef,private streamsService:StreamsService,private videoService:VideosService) { 
  
  }


  items:any = [];
  end=4;
  clickForMoreBTN=true; //click for more button /home
  clickMoreBTN=false; //click for more /streams-videos 
  //'videos.jpg','videos.jpg','videos.jpg','videos.jpg']


  routeExt:string;
  ngOnInit() {
  

    this.viewStreams();


  }



  viewStreams(){
    let path=['streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg'];
    this.clickBGremove();
    //console.log(this.myElement.nativeElement.querySelector('#streamsbtn'));
    let element:HTMLElement=this.myElement.nativeElement.querySelector("#streamsbtn");
    this.routeExt="Streams";
    element.classList.add("svbuttonbg");
    this.streamsService.GetStreams().subscribe(data => {
      this.items=data;
    });



  }
  viewVideos(){
    let path=['video.jpg','video.jpg','video.jpg'];
    this.clickBGremove();
    let element:HTMLElement=this.myElement.nativeElement.querySelector("#videosbtn");
    this.routeExt="Videos";
    element.classList.add("svbuttonbg");


    this.videoService.getVideos().subscribe(data => {
      this.items=data;
    });

  }


  clickBGremove(){
    let element2:HTMLElement=this.myElement.nativeElement.querySelector(".svbuttonbg");

    if(element2){
      element2.classList.remove("svbuttonbg");
    }

  }

 

}
