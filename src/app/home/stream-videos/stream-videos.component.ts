import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


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
  styleUrls: ['./stream-videos.component.css']
})
export class StreamVideosComponent implements OnInit {

  constructor() { }


  items = [];
  //'videos.jpg','videos.jpg','videos.jpg','videos.jpg']
  ngOnInit() {
    this.viewStreams();

  }

  viewStreams(){
    let path=['streams.jpg','streams.jpg','streams.jpg','streams.jpg'];
 
    return this.items=path;
  }
  viewVideos(){
    let path=['video.jpg','video.jpg','video.jpg'];
    return this.items=path;
  }

 

}
