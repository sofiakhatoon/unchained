import { Pipe, PipeTransform } from '@angular/core';
import { Achievements } from '../models/achievements';

@Pipe({
  name: 'achievementsSearch',
  pure:false
})
export class AchievementsSearchPipe implements PipeTransform {

  transform(value: Achievements[], searchTerm:string): any {
      if(!value || !searchTerm){
        return value;
      
      }
    

    return value.filter(x=>x.achievement_tournament.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }

}
