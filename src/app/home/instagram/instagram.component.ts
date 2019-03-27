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
  instagramAccesToken:string;
  constructor(private instagramService:InstagramService) {

 
    this.instagramService.getInstagramMyAPI().subscribe(data=>{

      this.instagramAccesToken=data.key;
      this.instagramService.getInstagramData(this.instagramAccesToken).subscribe(data => {
      
        this.instagramData=data.data;
      }
      );
    });
   
    

  }

  
  instagramData:any;

  ngOnInit() {

  
    


    
  }
  gotoIg(link:string){
     
     window.open(link,'_blank');
  }


}
