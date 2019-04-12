import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routerLinkReplace'
})
export class RouterLinkReplacePipe implements PipeTransform {

  transform(value: string): any {

    for(let item of value){
    
      value=value.replace(' ','-');
    }
    console.log(value);
    return value;
  }

}
