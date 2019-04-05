import { Pipe, PipeTransform } from '@angular/core';
import { Achievements } from '../models/achievements';

@Pipe({
  name: 'achievementsFilterByDate'
})
export class AchievementsFilterByDatePipe implements PipeTransform {

  transform(value: Achievements[], date: Date): any {

    if (!value || !date) {
      return value;

    }

    console.log(value.filter(x => x.achievement_date == date));
    return value.filter(x => x.achievement_date >= date);
  }

}
