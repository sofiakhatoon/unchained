import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Observable } from 'rxjs';
import { Achievements } from '../models/achievements';
import { AchievementsAddEdit } from '../models/achievementsAddEdit';
import {FileUploader} from 'ng2-file-upload';
@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getAchievements(gameid:number): Observable<Achievements[]> {
     
    return this.httpClient.get<Achievements[]>(this.path + "achievements/"+gameid);
   
  }
  getAchievementsForAdminPanel(): Observable<Achievements[]> {
     
    return this.httpClient.get<Achievements[]>(this.path + "achievements");
   
  }
  add(item:AchievementsAddEdit){

    let formData: FormData = new FormData(); 
    for (const prop in item) {
      if (!item.hasOwnProperty(prop)) { continue; }
      formData.append(prop , item[prop]);
    }
   
    this.httpClient.post(this.path + 'achievements/add',formData).subscribe(data=>{
        //console.log(data);
    });
  }

  result:boolean=false;
  delete(item:Achievements):boolean{
    this.httpClient.post(this.path + 'achievements',item).subscribe(data=>{
      this.result=true;
      //console.log(this.result);
      return this.result;
    });
    return this.result;
  }

}
