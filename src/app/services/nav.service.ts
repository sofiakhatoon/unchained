import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private httpClient: HttpClient) { }
  path = "http://uncapi.esit.com.tr/api/";

  getMenu(): Observable<Menu[]> {
    
    return this.httpClient.get<Menu[]>(this.path + "menu");
   
  }


}
