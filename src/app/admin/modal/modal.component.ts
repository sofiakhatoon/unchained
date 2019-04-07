import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AchievementsAddEdit } from 'src/app/models/achievementsAddEdit';
import { AchievementsService } from 'src/app/services/achievements.service';
import { FileUploader } from 'ng2-file-upload';
import { Globalvariable } from 'src/app/app_classes/globalvariable';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AchievementsService],
  
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private achievementsService: AchievementsService) { }
  addItems:AchievementsAddEdit=new AchievementsAddEdit();
  hasBaseDropZoneOver =false;
  path:string=Globalvariable.apiurl;

  

  ngOnInit() {
  

  }
  public close() {  
    this.matDialogRef.close();
  }

  @ViewChild('fileInput') fileInput;
  add(){
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.addItems.myfile=fileBrowser.files[0];
    }

    this.achievementsService.add(this.addItems);
  }
 
}
