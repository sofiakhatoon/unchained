import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosModel } from '../models/videosModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


baseTwitch:string="https://api.twitch.tv/kraken/";
constructor(private httpClient:HttpClient) { }

getChannelVideos():Observable<any>{
  
  return this.httpClient
  .get<any>("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBH8ui0OYfsc-vvC8YorllOy7to3MVewsI&channelId=UC06RH6ZiWfk2F2RH9KyaRwQ&part=snippet,id&order=date&maxResults=20&type=video");
 }
 


}
