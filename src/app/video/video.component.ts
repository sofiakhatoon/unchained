import { Component, OnInit } from '@angular/core';
import { StreamsComponent } from '../streams/streams.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }
  items=['video.jpg','video.jpg','video.jpg'];
  end=8;

  ngOnInit() {
 
  }
  clickMore(){
    this.end=this.end+8;
     }
   
}
