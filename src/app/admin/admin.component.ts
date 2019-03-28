import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { Globalvariable } from '../app_classes/globalvariable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {


  constructor(private authService:AuthService,private router:Router,private myElements:ElementRef) { 

    Globalvariable.adminpage=true;

  }

  ngOnInit() {
    document.body.style.backgroundColor="#fff";
    var a=document.getElementsByTagName("footer")[0].style.display="none";
  }





}
