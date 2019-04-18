import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Globalvariable } from "../app_classes/globalvariable";
import { TwitchChannelsAddEdit } from '../models/TwitchChannelsAddEdit';
import { AuthService } from './auth.service';
import { TwitchChannelsForClient } from '../models/TwitchChannelsForClient';

@Injectable({
  providedIn: "root"
})
export class TwitchService {
  constructor(private httpClient: HttpClient,
    private authService: AuthService) { }

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
  bearerToken = "Bearer " + this.authService.token;
  accept2 = "application/json";

  options2 = {
    headers: new HttpHeaders({
      Authorization: this.bearerToken,
      Accept: this.accept2
    })
  };
  optionsForFormData = {
    headers: new HttpHeaders({
      Authorization: this.bearerToken
    })
  };

  //----Ctrl Panel
  addChannels(item: TwitchChannelsAddEdit): Observable<TwitchChannelsAddEdit> {
    console.log(item);
    /*const data: TwitchChannelsAddEdit = {

      id: item.id,
      twitch_channel_id: item.twitch_channel_id,
      twitch_channel_description: item.twitch_channel_description,
      twitch_channel_name: item.twitch_channel_name,
      twitch_channel_status: item.twitch_channel_status,
      twitch_channel_insertdatetime: item.twitch_channel_insertdatetime,
      twitch_channel_updatedatetime: item.twitch_channel_updatedatetime,
      game_id: item.game_id,
      player_id: item.player_id
    };*/
    let formData: FormData = new FormData();
    for (const prop in item) {
      if (!item.hasOwnProperty(prop)) {
        continue;
      }
      formData.append(prop, item[prop]);
    }

    //console.log(options);
    return this.httpClient
      .post<TwitchChannelsAddEdit>(
        this.baseMyApi + "TwitchChannels/add",
        formData,
        this.optionsForFormData
      );
  }

  getChannels(): Observable<TwitchChannelsAddEdit[]> {
    return this.httpClient.get<TwitchChannelsAddEdit[]>(
      this.baseMyApi + "TwitchChannels/getTwitchChannelsForAdmin",
      this.options2
    );
  }

  result: boolean = false;
  delete(item: TwitchChannelsAddEdit): boolean {

 
    this.httpClient.post(this.baseMyApi + "TwitchChannels/Delete", item, this.options2).subscribe(data => {
      this.result = true;
    });
    return this.result;
  }


  editReturn: boolean;
  edit(item: TwitchChannelsAddEdit) {
    console.log(item);
    let formData: FormData = new FormData();
    for (const prop in item) {
      if (!item.hasOwnProperty(prop)) {
        continue;
      }
      formData.append(prop, item[prop]);
    }

    //console.log(options);
    return this.httpClient
      .post<TwitchChannelsAddEdit>(
        this.baseMyApi + "TwitchChannels/edit",
        formData,
        this.optionsForFormData
      );
  
  }

  //---------------
  getChannelsForClient():Observable<TwitchChannelsForClient[]>{
    return this.httpClient.get<TwitchChannelsForClient[]>(
      this.baseMyApi + "TwitchChannels/getTwitchChannels"
    );
  }
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
