import { Pipe, PipeTransform } from '@angular/core';
import { TwitchChannelsAddEdit } from '../models/TwitchChannelsAddEdit';

@Pipe({
  name: 'twhannelsSearchByUserName'
})
export class TwhannelsSearchByUserNamePipe implements PipeTransform {


  transform(value: TwitchChannelsAddEdit[], searchTerm: string): any {
    if (!value || !searchTerm) {
      return value;

    }


    return value.filter(x => x.twitch_channel_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
