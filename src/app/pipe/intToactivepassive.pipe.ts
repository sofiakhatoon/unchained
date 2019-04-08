import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToactivepassive'
})
export class IntToactivepassivePipe implements PipeTransform {

  transform(value:number): any {
    if(!value){return value;}
    let newValue="Passive";
    if(value==1){
      newValue="Active";
    }
    return newValue;
  }

}
