import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Globalvariable } from '../app_classes/globalvariable';
import { Sliders } from '../models/sliders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private httpClient: HttpClient) {

    
  }
  path = Globalvariable.apiurl;

  getSlider(): Observable<Sliders[]> {
    
    return this.httpClient.get<Sliders[]>(this.path + "slider");
   
  }

}
