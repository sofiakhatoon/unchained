import { Component, OnInit } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { SlidersService } from '../../services/sliders.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[ NgbCarouselConfig ]
})
export class SliderComponent implements OnInit {

  constructor(private config:NgbCarouselConfig,private sliderService:SlidersService) { 

    config.interval=15000;
    config.wrap=true;
    config.keyboard=true;
    config.pauseOnHover=true;
    config.showNavigationArrows=false;
    this.sliderService.getSlider().subscribe(data => {
      this.items=data;
      console.log(this.items);
    });

  }

  items = [];
  imgPath="../../../assets/slider/";
  ngOnInit() {

   
  

  }

}
