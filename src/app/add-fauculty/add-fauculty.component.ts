import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fauculty',
  templateUrl: './add-fauculty.component.html',
  styleUrls: ['./add-fauculty.component.css']
})
export class AddFaucultyComponent implements OnInit {

  constructor() { }
  Name=""
  Department=""
  Designation=""
  DOB=""
  EducationalQualification=""
  Address=""
  MobNo=""
  DateOfJoining=""

  status:boolean=false

  readValues=()=>{
    let data ={
   Name:this.Name,
  Department:this.Department,
  Designation:this.Designation,
  DOB:this.DOB,
  EducationalQualification:this.EducationalQualification,
  Address:this.Address,
  MobNo:this.MobNo,
  DateOfJoining:this.DateOfJoining
    }
console.log(data)
this.status=true
  }

  ngOnInit(): void {
  }

}
