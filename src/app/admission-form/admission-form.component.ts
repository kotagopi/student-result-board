import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdmissionFormComponent>) { }

  ngOnInit(): void {
  }
  public close(): void {
    this.dialogRef.close();
  }
  public save(): void {

  }
}
