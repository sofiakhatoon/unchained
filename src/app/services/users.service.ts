import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Globalvariable } from '../app_classes/globalvariable';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private httpClient: HttpClient,
  private authService: AuthService) { }

  path=Globalvariable.apiurl;
bearerToken = "Bearer " + this.authService.token;

   options = {
    headers: new HttpHeaders({
      Authorization: this.bearerToken
    })
  };
  GetUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(

      this.path+"users/getallusers",this.options

    );
  }
  RegisterUser(item:Users):Observable<Users>{
    return this.httpClient.post<Users>(

      this.path+"users/register",item,this.options

    );
  }

}
