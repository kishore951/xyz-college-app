import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor( private myrouter:Router) { }

  username=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data ={
      "username":this.username,
      "password":this.password
    }
    if(this.username == "admin" && this.password=="admin") {
      this.myrouter.navigate(["/dashboard"])
    
    }else{
      alert("invalid login")
    }
    console.log(data)
    this.status=true
  }
  

  ngOnInit(): void {
  }

}
