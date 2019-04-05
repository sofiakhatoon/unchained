import { Pipe, PipeTransform } from '@angular/core';
import { Achievements } from '../models/achievements';

@Pipe({
  name: 'achievementsFilterByPrize'
})
export class AchievementsFilterByPrizePipe implements PipeTransform {

  transform(values: Achievements[], prizeboolean: boolean): any {

    if (!values || !prizeboolean) {
      values.sort((val1, val2) => {
        return (
          <any>new Date(val2.achievement_date) - <any>new Date(val1.achievement_date)
        );
      });
      return values;

    }

    //console.log(values.filter(x => x.achievement_date == date));


      values.sort((val1, val2) => {
        return (
          <any>val2.achievement_prize - <any>val1.achievement_prize
        );
      });
     return values;
    
    
  }

}
