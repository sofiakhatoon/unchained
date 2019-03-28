import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Globalvariable } from './app_classes/globalvariable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Unchained';
  adminpage:any;
  
  constructor() {
    console.log(Globalvariable.adminpage);
    
    this.adminpage=Globalvariable.adminpage;
    
  }
 
 
}
