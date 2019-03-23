import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/services/instagram.service';
import { InstagramPhotos } from 'src/app/models/instagramPhotos';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AppComponent } from 'src/app/app.component';
import { NavComponent } from 'src/app/nav/nav.component';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor(private instagramService:InstagramService) { }

  
  instagramData:any;

  ngOnInit() {

    this.instagramService.getInstagramData().subscribe(data => {
   
      this.instagramData=data.data;
      console.log(data.data);
    }
 );
    
    


    
  }
  gotoIg(link:string){
     
     window.open(link,'_blank');
  }


}
