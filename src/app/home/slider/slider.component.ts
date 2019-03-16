import { Component, OnInit } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[ NgbCarouselConfig ]
})
export class SliderComponent implements OnInit {

  constructor(private config:NgbCarouselConfig) { 

    config.interval=15000;
    config.wrap=true;
    config.keyboard=true;
    config.pauseOnHover=true;

  }

  images = ['../../../assets/slider/4.jpg','../../../assets/slider/2.jpg','../../../assets/slider/1.jpg'];

  ngOnInit() {
  }

}
