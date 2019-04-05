import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Observable } from 'rxjs';
import { Achievements } from '../models/achievements';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getAchievements(gameid:number): Observable<Achievements[]> {
     
    return this.httpClient.get<Achievements[]>(this.path + "achievements/"+gameid);
   
  }

}
