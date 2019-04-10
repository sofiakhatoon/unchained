import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

constructor(private httpClient:HttpClient) { }


clientID:string="9fjz3wjc7yrohh25jmnz07l0iax1xx";
accept:string="application/vnd.twitchtv.v5+json";
 options = {
  headers: new HttpHeaders({
    "Client-Id":this.clientID,
    "Accept":this.accept
  })
};
baseTwitch:string="https://api.twitch.tv/kraken/";
getChannelInfo(TwUsername:string): Observable<any> {
  //instagram api
  //console.log("ss"+instagramAccesToken);
  return this.httpClient.get<any>(this.baseTwitch+"/users?login="+TwUsername,this.options);

}
getChannelStream(TwChannelID:string): Observable<any> {
  //instagram api
  //console.log("ss"+instagramAccesToken);
  return this.httpClient.get<any>(this.baseTwitch+"/streams/"+TwChannelID,this.options);

}


}
