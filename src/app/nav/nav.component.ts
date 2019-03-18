import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterService } from '../services/router.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  providers:[RouterService]
})
export class NavComponent implements OnInit {
  menu: HTMLElement;
  previousUrl: string;
  constructor(private myElement: ElementRef, private routerService:RouterService) {

    routerService.getNavigationEndUrl().subscribe(x => {
  
      this.menu = this.myElement.nativeElement.querySelector('.navbar');
      //console.log("sdsd"+x.url);  
      if(x.url.toLocaleLowerCase().includes('/home') || x.url.toLocaleLowerCase()=='/' ){
        this.menu.classList.remove('otherMenu');
        this.menu.classList.add('baseMenu');
      }else{
        this.menu.classList.add('otherMenu');
        this.menu.classList.remove('baseMenu');
      }

    }

    );





  }

  ngOnInit() {


  }



  openMenu(event: any) {

    //let menuOpen:HTMLElement=document.getElementById('navbarResponsive') as HTMLElement;
    let menuOpen: HTMLElement = this.myElement.nativeElement.querySelector("#navbarResponsive") as HTMLElement;
    //console.log(menuOpen.classList.contains("show"));

    let logo: HTMLElement = this.myElement.nativeElement.querySelector("#logo") as HTMLElement;
    if (!menuOpen.classList.contains("show")) {
      logo.style.opacity = "0";

      setTimeout(() => {
        logo.classList.add("logoPosition");
      }, 300);
    } else {
      logo.style.opacity = "1";
      logo.classList.remove("logoPosition");
    }
  }
}
