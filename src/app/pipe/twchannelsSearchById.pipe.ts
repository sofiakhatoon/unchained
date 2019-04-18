import { Pipe, PipeTransform } from '@angular/core';
import { TwitchChannelsAddEdit } from '../models/TwitchChannelsAddEdit';

@Pipe({
  name: 'twchannelsSearchById'
})
export class TwchannelsSearchByIdPipe implements PipeTransform {


  transform(value: TwitchChannelsAddEdit[], searchTerm: string): any {
    if (!value || !searchTerm) {
      return value;

    }


    return value.filter(x => x.twitch_channel_id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


}
