import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {
  public admissionForm: FormGroup;
  public showValidation = false;
  constructor(private dialogRef: MatDialogRef<AdmissionFormComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
/**
 * @description used to write the controls
 * @author Gopi
 */
  private initForm() {
    this.admissionForm = this.fb.group({
      firstNm: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(20)]],
      lastNm: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(20)]],
      class: ['', [Validators.required]],
      yearOfPass: ['', Validators.required],
      percentage: ['', Validators.required],
    });
  }
/**
 * @description used to get the control of form to validate that in templte
 * @author Gopi
 */
  get form()
    {
    return this.admissionForm.controls;
   }
/**
 * @description used to close the form dialog
 * @author Gopi
 */
  public close(){
    this.dialogRef.close();
  }
/**
 * @description used to validate the year of passout
 * @author Gopi
 */
  public yearofPassout(value) {
    if (value < 2017) {
      this.showValidation = true;
    } else {
      this.showValidation = false;
    }
  }
/**
 * @description to get the form data
 * @author Gopi
 */
  public save() {
    const formData = this.admissionForm.value;
    this.dialogRef.close();
  }
}
