import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Globalvariable } from '../app_classes/globalvariable';
@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  instagramPath = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
  //instagramAccesToken = "7078378677.b4664ca.fe281beec00e4683ba8e9c5da87fb329";

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getInstagramData(instagramAccesToken:string): Observable<any> {
    //instagram api
    //console.log("ss"+instagramAccesToken);
    return this.httpClient.get<any>(this.instagramPath+instagramAccesToken);

  }
  getInstagramMyAPI():Observable<any>{
    //unchained api request for token
    return this.httpClient.get<any>(this.path+"Values/GetInstagramApi");
  }
  getInstagramImage(url: string): Observable<any> {
    return this.httpClient.get<any>(url + "?_a=1");

  }
}
