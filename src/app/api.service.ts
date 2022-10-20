import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  viewStudent=()=>{
    return this.http.get("http://localhost:8080/viewStudent")
  }
  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studententry",data)
  }
  deleteStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteStudent",data)
  }
}
