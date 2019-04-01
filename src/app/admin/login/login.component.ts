import { Component, OnInit } from "@angular/core";
import { Globalvariable } from "src/app/app_classes/globalvariable";
import { AuthService } from "src/app/services/auth.service";
import { LoginUser } from 'src/app/models/loginUser';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {
    Globalvariable.adminpage = true;
  }
  loginUser: LoginUser = new LoginUser();
  ngOnInit() {
    document.getElementsByTagName("footer")[0].style.display = "none";
  }

  login() {
    this.authService.login(this.loginUser);
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
