import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-othernav',
  templateUrl: './othernav.component.html',
  styleUrls: ['./othernav.component.css']
})
export class OthernavComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) {

    var a=document.getElementsByTagName("footer")[0].style.display="none";
    
   }

  ngOnInit() {
  }
  logOut(){
    this.authService.logOut();
  }
  toHome(){
    location.href='/Home';
  }
}
