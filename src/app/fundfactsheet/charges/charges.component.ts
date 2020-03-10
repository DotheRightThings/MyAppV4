import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  constructor() { }

  charges = [
    {"name":"Sales Charges","detail":"1.75%"},
    {"name":"Annual Management Fee","detail":"1.75%"},
    {"name":"Switching Fee","detail":"Not Applicable"},
    {"name":"Redemption Fee","detail":"-"},
    {"name":"Annual Expense Ratio","detail":"2.31% as at 30 Jun 2018"},
    {"name":"Trustee Fee","detail":"0.08% p.a. of NAV"},
    ];;

  ngOnInit(): void {
  }

}
