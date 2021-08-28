import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(false)
  }

  SendOk(): void {
    this.dialogRef.close(true)
  }
}
