import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {

  constructor() { }

  returns = [
    {"from":"8 Aug 2018","until":"8 Aug 2019","fundreturn":"0.79%"}
  ];

  sections = [
    {"name":"From Date"},
    {"name":"Until Date"},
    {"name":"Fund Returns (MYR)"}
  ];

  ngOnInit(): void {
  }

}
