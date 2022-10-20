import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  
  name=""
  rollNo=""
  admissionNo=""
  college=""
  department=""
  bloodGroup=""
  dOB=""
  parentName=""
  parentEmailId=""
  guardianAddress=""
  
  readValues=()=>{
    let data ={
      
  "name":this.name,
  "rollNo":this.rollNo,
  "admissionNo":this.admissionNo,
  "college":this.college,
  "department":this.department,
  "bloodGroup":this.bloodGroup,
  "dob":this.dOB,
  "parentName":this.parentName,
  "parentEmailId":this.parentEmailId,
  "guardianAddress":this.guardianAddress

    }
    console.log(data)
    this.myapi.addStudent(data).subscribe(
      (data)=>{
        alert("successfully added")
      }
    )
    

    

    this.name
  this.rollNo
  this.admissionNo=""
  this.college=""
  this.department=""
  this.bloodGroup=""
  this.dOB=""
  this.parentName=""
  this.parentEmailId=""
  this.guardianAddress=""

  }

  ngOnInit(): void {
  }

}
