import { Injectable } from '@angular/core';
import { Matches } from '../models/matches';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private httpClient: HttpClient) { }
  baseUrl:string="https://api.opendota.com/api/";   //docs.opendata.com
  teamid:string="5242529";
  getAllMatches(): Observable<Matches[]> {
    
    return this.httpClient.get<Matches[]>(this.baseUrl + "teams/" + this.teamid+ "/matches");
   
  }


}
