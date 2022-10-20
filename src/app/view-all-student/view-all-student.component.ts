import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css']
})
export class ViewAllStudentComponent implements OnInit {

  constructor( private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
   this.myapi.viewStudent().subscribe(
    (data)=>{
      this.viewStudent=data
    }
   )
  }
  deleteStudent=(id:any)=>{
    let data ={
      "id":id
    }
    this.myapi.deleteStudent(data).subscribe(
      (resp)=>{
        alert("deleted")
      }
    )
    this.fetchData()
  }

  viewStudent:any=[]
  ngOnInit(): void {
  }

}
