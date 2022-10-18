import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-fauculty',
  templateUrl: './view-all-fauculty.component.html',
  styleUrls: ['./view-all-fauculty.component.css']
})
export class ViewAllFaucultyComponent implements OnInit {

  constructor() { }

  fetchData=[{"name":"vignesh","phno":"9786785678","dept":"Mech","doj":"22.09.2021"},{"name":"john","phno":"9874678934","dept":"ECE","doj":"24.08.2022"},{"name":"sridhar","phno":"9756748734","dept":"CSE","doj":"12.08.2018"},{"name":"mukesh","phno":"8952145638","dept":"EEE","doj":"12.09.2020"}]

  ngOnInit(): void {
  }

}
