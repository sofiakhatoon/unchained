import { Pipe, PipeTransform } from '@angular/core';
import { Achievements } from '../models/achievements';

@Pipe({
  name: 'achievementsFilterByGame'
})
export class AchievementsFilterByGamePipe implements PipeTransform {

  transform(value:Achievements[], gameId:number): any {
    if(!value || !gameId || gameId==0 ){
      return value;
    
    }
    return value.filter(f=>f.games.game_id==gameId);
  }

}
