import { Component, OnInit, ElementRef } from "@angular/core";

import { RouterService } from "src/app/services/router.service";

import { Twchannel } from "src/app/models/Twchannel";


@Component({
  selector: "app-stream-videos",
  templateUrl: "./stream-videos.component.html",
 
  styleUrls: ["./stream-videos.component.css"],
  providers: [RouterService]
})
export class StreamVideosComponent implements OnInit {
  constructor(
    private routerService: RouterService,
    private myElement: ElementRef,
  
  ) {  }

  itemsStream = [];
  itemsVideo = [];
  end = 4;

  routeExt: string;
  ngOnInit() {
    this.viewStreams();
  }

  //Twchannel:Twchannel=new Twchannel();
  video:boolean=false;
  viewStreams() {
    this.clickBGremove();
    let element:HTMLElement=this.myElement.nativeElement.querySelector("#streamsbtn");
    this.routeExt="Streams";
    if(element){
      element.classList.add("svbuttonbg");
    }

    this.video=true;
  
    console.log(this.video);
  }

  viewVideos() {
    this.clickBGremove();
    let element:HTMLElement=this.myElement.nativeElement.querySelector("#videosbtn");
    this.routeExt="Videos";
    if(element){
element.classList.add("svbuttonbg");
    }
    
    this.video=false;
    console.log(this.video);

 
  }

  clickBGremove() {
    let element2: HTMLElement = this.myElement.nativeElement.querySelector(
      ".svbuttonbg"
    );

    if (element2) {
      element2.classList.remove("svbuttonbg");
    }
  }
}
