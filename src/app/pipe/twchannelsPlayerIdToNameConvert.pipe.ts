import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player';

@Pipe({
  name: 'twchannelsPlayerIdToNameConvert'
})
export class TwchannelsPlayerIdToNameConvertPipe implements PipeTransform {

  constructor() {



  }
  transform(value: any, player:Player[]): string {
    if (!value || !player) {
      return value;
    }

    
     let x= player.filter(f=>f.player_id==value);
     if(x.length<1){
      return value;
     }
    
    return  x[0].player_username;
  }

}
