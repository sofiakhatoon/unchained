import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  constructor() { }

   items=['streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg','streams.jpg'];
   end=8;
   moreBtn=true;
  ngOnInit() {
   
  
  }

  clickMore(){

    if(this.items.length>this.end){
      this.end=this.end+8;
      this.moreBtn=true;

    }
   
    else{
      this.moreBtn=false;
    }
  
    }

}
