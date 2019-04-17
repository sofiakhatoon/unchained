import { Injectable } from '@angular/core';
import { Globalvariable } from '../app_classes/globalvariable';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getPlayers(): Observable<Player[]> {
     
    return this.httpClient.get<Player[]>(this.path + "Players/getAll");
   
  }
 

}
