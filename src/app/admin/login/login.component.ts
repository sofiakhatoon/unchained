import { Component, OnInit } from '@angular/core';
import { Globalvariable } from 'src/app/app_classes/globalvariable';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) {
    Globalvariable.adminpage=true;
   }
   loginUser: any = {};
  ngOnInit() {

    document.getElementsByTagName('footer')[0].style.display='none';

  }


  login() {
    this.authService.login(this.loginUser);
    alert("zaa");
  }

 

  get isAuthenticated(){
     return this.authService.loggedIn();
  }

}
