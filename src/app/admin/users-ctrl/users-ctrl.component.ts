import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { ModalforusersctrlComponent } from './modalforusersctrl/modalforusersctrl.component';
import { MatDialog } from '@angular/material';
import { Rolestable } from 'src/app/models/rolestable';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-users-ctrl',
  templateUrl: './users-ctrl.component.html',
  styleUrls: ['./users-ctrl.component.css']
})
export class UsersCtrlComponent implements OnInit {

  constructor(private usersService:UsersService, public dialog: MatDialog,private rolesService:RolesService) { 

    this.usersService.GetUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
     },
     error=>{
 
     }
     );


     this.rolesService.GetRoles().subscribe(data=>{
      this.roles=data;
     });


  }
  users:Users[];
  roles:Rolestable[];
  
  ngOnInit() {


  }
  public openModal() {
    this.dialog.open(ModalforusersctrlComponent,{ data: { roles: this.roles, editBTN: false } });
  }
  public openEditModal(id: number) {
    //console.log(this.items.filter(f => f.achievement_id == id) );
    //this.dialog.open(ModalComponent, { data: { games: this.games, editBTN: true, edititem: this.items.filter(f => f.achievement_id == id) } });
  }
}
