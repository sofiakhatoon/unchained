import { Injectable } from "@angular/core";
import { LoginUser } from "../models/loginUser";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { JwtHelperService  } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { RegisterUser } from "../models/registerUser";
import { Globalvariable } from '../app_classes/globalvariable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(    private httpClient: HttpClient,
  private router: Router) { }
  path =Globalvariable.apiurl;
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY="token"
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
    
      .post(this.path + "auth/login", loginUser, { headers: headers })
    
      .subscribe(
        data => {
        console.log(data);
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        //this.alertifyService.success("Sisteme giriş yapıldı");
        alert("Succes");
        this.router.navigateByUrl("/Ctrl");
      },
     
      status=>{
        if(status.status==401)alert(" username or password not found");
        
         
      
      
      }
      
      );
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data=>{
        
      });
  }
  saveToken(token) {
    
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
    alert("Sistemden çıkış yapıldı");
  }

  loggedIn(){


    
    return this.jwtHelper.decodeToken(this.TOKEN_KEY)
  }
  get token(){
    console.log();
    return localStorage.getItem(this.TOKEN_KEY);
  }

 
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(this.token).nameid
  }

}
