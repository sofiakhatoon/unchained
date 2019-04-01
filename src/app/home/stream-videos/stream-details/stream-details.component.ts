import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamsService } from 'src/app/services/streams.service';
import { Streams } from 'src/app/models/streams';

@Component({
  selector: 'app-stream-details',
  templateUrl: './stream-details.component.html',
  styleUrls: ['./stream-details.component.css']
})
export class StreamDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private streamsService:StreamsService) {

    this.activatedRoute.params.subscribe(params => {
      this.getStreamById(params["id"]);
    });


   }

  ngOnInit() {
    
  }

  details:Streams;
  getStreamById(id:number) {
    this.streamsService.getStreamById(id).subscribe(data => {
      this.details=data;
      console.log(data);
    });
  }

}
