import { Rolestable } from './rolestable';

export class Users {
    userId:number;
    userName:string;
    user_mail:string;
    user_phone:string;
    user_status:number;
    user_password:string;
    confirmPassword:string;
    user_online:number;
    user_last_login_date:Date;
    user_exit_date:Date;
    user_insertdatetime:Date;
    user_updatedatetime:Date;
    rolesTable:Rolestable[]=[];
}
