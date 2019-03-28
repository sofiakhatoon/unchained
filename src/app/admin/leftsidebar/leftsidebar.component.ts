import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
 
  constructor(private myElements:ElementRef) {
    
   }

  ngOnInit() {
  }
  

}
