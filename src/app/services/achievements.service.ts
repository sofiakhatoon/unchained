import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Observable } from 'rxjs';
import { Archievements } from '../models/archievements';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getAchievements(): Observable<Archievements[]> {
     
    return this.httpClient.get<Archievements[]>(this.path + "achievements");
   
  }

}
