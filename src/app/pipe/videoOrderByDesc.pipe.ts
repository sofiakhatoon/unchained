import { Pipe, PipeTransform } from '@angular/core';
import { VideosModel } from '../models/videosModel';

@Pipe({
  name: 'videoOrderByDesc'
})
export class VideoOrderByDescPipe implements PipeTransform {

  transform(values: VideosModel[] ): VideosModel[] {

    if(!values){
      return values;
    }
  
    values.sort((val1, val2) => {
      return (
        <any>new Date(val2.insertdate) - <any>new Date(val1.insertdate)
      );
    });
    return values;
  }

}
