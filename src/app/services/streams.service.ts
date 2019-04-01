import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Videos } from '../models/videos';
import { Observable } from 'rxjs';
import { Streams } from '../models/streams';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {
  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  GetStreams(): Observable<Streams[]> {
    
    return this.httpClient.get<Streams[]>(this.path + "VideoStream/streams");
   
  }
  getStreamById(id):Observable<Streams>{
    console.log(id);
    return this.httpClient.get<Streams>(this.path + "VideoStream/details/"+id);
  }


}
