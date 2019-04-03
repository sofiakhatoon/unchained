import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconControl'
})
export class IconControlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return value==null?'../assets/img/Dota2.png':value;
  }

}
