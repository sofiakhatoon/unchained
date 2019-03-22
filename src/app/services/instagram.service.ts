import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  instagramPath="https://api.instagram.com/v1/users/self/media/recent/?access_token=";
  instagramAccesToken="1762506077.a1668fd.af2ef97508bc47d583a00b655874b642";

constructor(private httpClient: HttpClient) { }


getInstagramData():Observable<any>{
  return this.httpClient.get<any>(this.instagramPath + this.instagramAccesToken);

}
getInstagramImage(url:string):Observable<any>{
  return this.httpClient.get<any>(url + "?_a=1");

}
}
