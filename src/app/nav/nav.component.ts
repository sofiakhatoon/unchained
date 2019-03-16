import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private myElement: ElementRef) {}

  ngOnInit() {}
  openMenu(event: any) {
    //let menuOpen:HTMLElement=document.getElementById('navbarResponsive') as HTMLElement;
    let menuOpen:HTMLElement = this.myElement.nativeElement.querySelector( "#navbarResponsive") as HTMLElement;
    console.log(menuOpen.classList.contains("show"));

    let logo: HTMLElement =  this.myElement.nativeElement.querySelector( "#logo") as HTMLElement;
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
