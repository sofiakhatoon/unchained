import { Directive, Input } from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers:[{
      provide:NG_VALIDATORS,
      useExisting:ConfirmEqualValidatorDirective,
      multi:true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {

  @Input() appConfirmEqualValidator:string;
  validate(control: AbstractControl):{[key:string]:any} | null {
    const controlToCompore=control.parent.get(this.appConfirmEqualValidator);
  
    if(controlToCompore&&controlToCompore.value!==control.value){
      console.log("zaa");
      return {'notEqual':true};
 
    }
    return null;
  }


  constructor() { }

}
