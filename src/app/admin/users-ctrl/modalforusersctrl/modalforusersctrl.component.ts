import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Rolestable } from 'src/app/models/rolestable';
import { Users } from 'src/app/models/users';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-modalforusersctrl',
  templateUrl: './modalforusersctrl.component.html',
  styleUrls: ['./modalforusersctrl.component.css']
})



export class ModalforusersctrlComponent implements OnInit {
  rolesCtrl = new FormControl();
  filteredItem: Observable<Rolestable[]>;

  roles: Rolestable[];
  results: string[];
  errors: string[];
  selectedRoles:string[]=[];


  constructor(

    private matDialogRef: MatDialogRef<ModalforusersctrlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ElementRef

  ) {

    this.roles = this.data.roles;
    this.filteredItem = this.rolesCtrl.valueChanges
      .pipe(
        startWith(''),
        tap(x=>this.selectedRoles.push(x)),
        map(f => f ? this._filterStates(f) : this.roles.slice())
      );
  
  }
  public _filterStates(value: string): Rolestable[] {
    const filterValue = value.toLowerCase();
 
    return this.roles.filter(f => f.role_name.toLowerCase().includes(filterValue));
  }
  addItems: Users = new Users();
  public close() {
    this.matDialogRef.close();
  }

  ngOnInit() {


  }

}
