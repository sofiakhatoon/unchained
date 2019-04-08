import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Games } from '../models/games';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getGames(): Observable<Games[]> {
     
    return this.httpClient.get<Games[]>(this.path + "Games/getAll");
   
  }
  getGamesForAdmin(): Observable<Games[]> {
     
    return this.httpClient.get<Games[]>(this.path + "Games/getAllForAdmin");
   
  }

}
