import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RouterLinkUnReplace'
})
export class RouterLinkUnReplacePipe implements PipeTransform {

  transform(value: string): any {


    for(let item of value){
      value=value.replace('-',' ');
    }

    return value.substring(0,1).toUpperCase();
  }

}
