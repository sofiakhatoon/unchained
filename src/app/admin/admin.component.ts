import { Component, OnInit } from '@angular/core';
import { Globalvariable } from '../app_classes/globalvariable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { 

    Globalvariable.adminpage=true;


  }

  ngOnInit() {
    document.body.style.backgroundColor="#fff";
    var a=document.getElementsByTagName("footer")[0].style.display="none";
  }




}
