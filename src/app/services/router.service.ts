import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

constructor(private router:Router) {


 }

 getNavigationEndUrl(){
  
  return  this.router.events.pipe(
    filter((event: NavigationEnd) => event instanceof NavigationEnd)
  );

 }

}
