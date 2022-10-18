import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css']
})
export class ViewAllStudentComponent implements OnInit {

  constructor() { }

  fetchData=[{"name":"kishore","rollNo":"001","Department":"ECE","dob":"15.05.2001"},{"name":"dharanish","rollNo":"002","Department":"EEE","dob":"31.09.2000"},{"name":"Suganth","rollNo":"003","Department":"IT","dob":"22.09.2000"},{"name":"sudharsan","rollNo":"004","Department":"CSE","dob":"22.06.1999"}]

  ngOnInit(): void {
  }

}
