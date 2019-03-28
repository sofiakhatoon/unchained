import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-othernav',
  templateUrl: './othernav.component.html',
  styleUrls: ['./othernav.component.css']
})
export class OthernavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  logOut(){
    this.authService.logOut();
  }
}
