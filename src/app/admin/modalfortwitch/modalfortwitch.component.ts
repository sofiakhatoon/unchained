import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modalfortwitch',
  templateUrl: './modalfortwitch.component.html',
  styleUrls: ['./modalfortwitch.component.css']
})
export class ModalfortwitchComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ModalfortwitchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private achievementsService: Twict

  ) { }

  ngOnInit() {
  }

}
