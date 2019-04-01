import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Videos } from '../models/videos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getVideos(): Observable<Videos[]> {
    
    return this.httpClient.get<Videos[]>(this.path + "VideoStream/videos");
   
  }

}
