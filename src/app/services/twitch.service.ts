import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Globalvariable } from "../app_classes/globalvariable";
import { TwitchChannelsAddEdit } from '../models/TwitchChannelsAddEdit';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class TwitchService {
  constructor(   private httpClient: HttpClient,
    private authService: AuthService) {}

  clientID: string = "9fjz3wjc7yrohh25jmnz07l0iax1xx";
  accept: string = "application/vnd.twitchtv.v5+json";
  options = {
    headers: new HttpHeaders({
      "Client-Id": this.clientID,
      Accept: this.accept
    })
  };
  baseTwitch: string = "https://api.twitch.tv/kraken/";
  baseMyApi: string = Globalvariable.apiurl;

  //----Ctrl Panel
  addChannels(item:TwitchChannelsAddEdit):Observable<TwitchChannelsAddEdit>{
    
    const data:TwitchChannelsAddEdit={
      channel_id:item.channel_id,
      channel_des:item.channel_des,
      channel_name:item.channel_name,
      status:item.status,
      game_id:item.game_id,
      player_id:item.player_id
    };

    let headers = new HttpHeaders();
    let bearerToken = "Bearer " + this.authService.token;
    let accept="application/json";
    console.log(bearerToken);
    const options = {
      headers: new HttpHeaders({
        Authorization: bearerToken,
        Accept:accept
      })
    };
        //console.log(options);
    return this.httpClient
      .post<TwitchChannelsAddEdit>(
        this.baseMyApi + "TwitchChannels/add",
        data,
        options
      );
  }


  //---------------

  getChannelsID(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseTwitch + "TwitchChannels/getTwitchChannels"
    );
  }

  getChannelInfo(TwUsername: string): Observable<any> {
    return this.httpClient.get<any>(
      this.baseTwitch + "users?login=" + TwUsername,
      this.options
    );
  }
  getChannelStream(TwChannelID: string): Observable<any> {
    return this.httpClient.get<any>(
      this.baseTwitch + "streams/" + TwChannelID,
      this.options
    );
  }
  getChannelVideos(TwChannelID: string): Observable<any> {
    return this.httpClient.get<any>(
      this.baseTwitch + "channels/" + TwChannelID + "/videos",
      this.options
    );
  }
}
