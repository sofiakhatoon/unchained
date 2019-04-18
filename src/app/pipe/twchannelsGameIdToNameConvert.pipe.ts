import { Pipe, PipeTransform } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Games } from '../models/games';

@Pipe({
  name: 'twchannelsGameIdToNameConvert'
})
export class TwchannelsGameIdToNameConvertPipe implements PipeTransform {


  constructor(private gamesService: GamesService) {



  }
  transform(value: any, games:Games[]): string {
    if (!value || !games) {
      return value;
    }

    
     let x= games.filter(f=>f.game_id==value);
     if(x.length<1){
      return value;
     }
    
    return  x[0].game_name;
  }

}
