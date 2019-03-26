import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  instagramPath="https://api.instagram.com/v1/users/self/media/recent/?access_token=";
  instagramAccesToken="2147749880.ff8db30.3390241b30c94a758f6410c00f099120";

constructor(private httpClient: HttpClient) { }


getInstagramData():Observable<any>{
  return this.httpClient.get<any>(this.instagramPath + this.instagramAccesToken);

}
getInstagramImage(url:string):Observable<any>{
  return this.httpClient.get<any>(url + "?_a=1");

}
}
