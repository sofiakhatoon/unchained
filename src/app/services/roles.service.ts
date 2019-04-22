import { Injectable } from '@angular/core';
import { Rolestable } from '../models/rolestable';
import { Globalvariable } from '../app_classes/globalvariable';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

constructor(private httpClient:HttpClient,private authService:AuthService) { }
path=Globalvariable.apiurl;
bearerToken = "Bearer " + this.authService.token;

   options = {
    headers: new HttpHeaders({
      Authorization: this.bearerToken
    })
  };

  GetRoles():Observable<Rolestable[]>{
    return this.httpClient.get<Rolestable[]>(

      this.path+"roles/GetAllRoles",this.options

    );
  }

}
