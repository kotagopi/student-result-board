import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'student-details';
  public stundentResults = [
    {
      studentNm: 'rajiv',
      marks: {
        maths: 18,
        english: 21,
        science: 45
      },
      rollNm: 'KV2020-8A1'
    },
    {
      studentNm: 'abhishek',
      marks: {
        maths: 43,
        english: 30,
        science: 37
      },
      rollNm: 'KV2020-8A2'
    },
    {
      studentNm: 'zoya',
      marks: {
        maths: 48,
        english: 31,
        science: 50
      },
      rollNm: 'KV2020-8A3'
    },    {
      studentNm: 'james',
      marks: {
        maths: 22,
        english: 35,
        science: 30
      },
      rollNm: 'KV2020-8A4'
    },
    {
      studentNm: 'john',
      marks: {
        maths: 10,
        english: 29,
        science: 33
      },
      rollNm: 'KV2020-8A5'
    },    {
      studentNm: 'mahesh',
      marks: {
        maths: 50,
        english: 43,
        science: 48
      },
      rollNm: 'KV2020-8A6'
    },    {
      studentNm: 'deepthi',
      marks: {
        maths: 33,
        english: 38,
        science: 44
      },
      rollNm: 'KV2020-8A7'
    },    {
      studentNm: 'karthik',
      marks: {
        maths: 29,
        english: 39,
        science: 48
      },
      rollNm: 'KV2020-8A8'
    },    {
      studentNm: 'aravind',
      marks: {
        maths: 13,
        english: 44,
        science: 48
      },
      rollNm: 'KV2020-8A9'
    },    {
      studentNm: 'swetha',
      marks: {
        maths: 30,
        english: 25,
        science: 35
      },
      rollNm: 'KV2020-8A10'
    },    {
      studentNm: 'sandya',
      marks: {
        maths: 29,
        english: 38,
        science: 22
      },
      rollNm: 'KV2020-8A11'
    },    {
      studentNm: 'kavya',
      marks: {
        maths: 50,
        english: 26,
        science: 10
      },
      rollNm: 'KV2020-8A12'
    },
    {
      studentNm: 'siva',
      marks: {
        maths: 42,
        english: 32,
        science: 20
      },
      rollNm: 'KV2020-8A13'
    },
    {
      studentNm: 'jessica',
      marks: {
        maths: 5,
        english: 15,
        science: 32
      },
      rollNm: 'KV2020-8A14'
    },
    {
      studentNm: 'jennifer',
      marks: {
        maths: 8,
        english: 27,
        science: 48
      },
      rollNm: 'KV2020-8A15'
    }
  ];
  public studentData = [];
  constructor(private matdialog: MatDialog) {}

  ngOnInit(): void {
    this.getStudentsStatus();
  }
/**
 * @description to get student status fail, pass or topper.
 * @author Gopi
 */
  private getStudentsStatus(): void {
    // used to sort student details in alphabetical order
    this.stundentResults.sort((a, b) => a.studentNm.localeCompare(b.studentNm));
    // used to get the status of student
    this.studentData = this.stundentResults.map(res => {
      const totalMarks = res.marks.english + res.marks.maths + res.marks.science;
      res['totalMarks'] = totalMarks;
      if (res.marks.english >= 20 && res.marks.maths >= 20 && res.marks.science >= 20) {
        res['status'] = 'pass';
      } else {
        res['status'] = 'fail';
      }
      return res;
    });
    // change the status for the max scorer as topper
    this.studentData.map(val => {
      if (val.totalMarks === this.getMaxValue()) {
        val.status = 'topper';
      }
    });
    return;
  }
/**
 * @description used to open admission dilog component
 * @author Gopi
 */
  public createAdmission(): void {
    this.matdialog.open(AdmissionFormComponent, {
      panelClass: 'col-sm-6'
    });
  }

  public getMaxValue(): void {
    return this.studentData.reduce((max, p) => p['totalMarks'] > max ? p['totalMarks'] : max, this.studentData[0]['totalMarks']);
  }
}
