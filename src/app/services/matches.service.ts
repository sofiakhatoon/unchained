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
  API_KEY:string="?api_key=5151b034-3723-4048-ad20-03bb21d4ed40";
  getAllMatches(): Observable<Matches[]> {
    
    return this.httpClient.get<Matches[]>(this.baseUrl + "teams/" + this.teamid+ "/matches"+this.API_KEY);
   
  }

  getMatchesById(MatchId:number): Observable<any> {
    
    return this.httpClient.get<any>(this.baseUrl + "matches/"+MatchId+this.API_KEY);
   
  }

}
