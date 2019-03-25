import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  videosOrstreams:string;
  constructor(private titleService: Title,private elRef:ElementRef) { 


  }


  ngOnInit() {
    this.setTitle("Unchained Home");
    
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
   
  }
}
