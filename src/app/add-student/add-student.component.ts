import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  Name=""
  RollNo=""
  AdmissionNo=""
  college=""
  department=""
  BloodGroup=""
  DOB=""
  ParentName=""
  ParentEmailId=""
  GuardianName=""
  GuardianAddress=""
  
  readValues=()=>{
    let data ={
  Name:this.Name,
  RollNo:this.RollNo,
  AdmissionNo:this.AdmissionNo,
  college:this.college,
  department:this.department,
  BloodGroup:this.BloodGroup,
  DOB:this.DOB,
  ParentName:this.ParentName,
  ParentEmailId:this.ParentEmailId,
  GuardianName:this.GuardianName,
  GuardianAddress:this.GuardianAddress

    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
