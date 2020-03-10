import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  sections = [
    {"name":"Asset Class"},
    {"name":"Fund Size (as at Jun 30, 2019)"},    
    {"name":"Sector"},    
    {"name":"Launch Date"},
    {"name":"Geographical Allocation"},
    {"name":"Launch Price"},
    {"name":"Approved by EPF"},
    {"name":"Pricing Basis"},
    {"name":"Shariah Compliant"},
    {"name":"Historical Income Distribution"},
    ];;

  datas = [
    {"data":"Equity"},
    {"data":"MYR 15.2 million"},    
    {"data":"General"},    
    {"data":"Dec 2, 2015"},
    {"data":"Asia excluding Japan"},
    {"data":"MYR 1.00"},
    {"data":"No"},
    {"data":"Forward Pricing"},
    {"data":"Yes"},
    {"data":"-"},
    ];;

  ngOnInit(): void {
  }

}
