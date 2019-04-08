import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AchievementsAddEdit } from "src/app/models/achievementsAddEdit";
import { AchievementsService } from "src/app/services/achievements.service";
import { FileUploader } from "ng2-file-upload";
import { Globalvariable } from "src/app/app_classes/globalvariable";
import { DatePipe, formatDate, getLocaleDateTimeFormat } from "@angular/common";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  providers: [AchievementsService],

  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  constructor(
    private matDialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private achievementsService: AchievementsService
  ) {}
  addItems: AchievementsAddEdit = new AchievementsAddEdit();
  hasBaseDropZoneOver = false;
  path: string = Globalvariable.apiurl;

  ngOnInit() {
    //console.log(this.data);
    let fileInputMessage = "Choose a file";
    this.addItems.game_id = 0;
    if (this.data.edititem) {
      this.addItems = this.data.edititem[0];
      fileInputMessage = "Update File";
    }
  }

  public close() {
    this.matDialogRef.close();
  }

  @ViewChild("fileInput") fileInput;
  add() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.addItems.myfile = fileBrowser.files[0];
    }

    this.achievementsService.add(this.addItems).subscribe(
      data => {
        if (data) {
          this.matDialogRef.close();
          alert("Successful add");
        }
      },
      error => {
        alert("Error Message: Fill in the required fields");
      }
    );
  }

  edit() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.addItems.myfile = fileBrowser.files[0];
    }
    //console.log(this.addItems);
    this.achievementsService.edit(this.addItems);
    //this.matDialogRef.close();
  }
}
