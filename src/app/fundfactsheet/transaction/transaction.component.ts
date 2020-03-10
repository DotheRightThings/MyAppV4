import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  transactions = [
    {"name":"Minimum Initial Investment","detail":"MYR 1000"},
    {"name":"Minimum Subsequent Investment","detail":"MYR 500"},
    {"name":"Minimum RSP Investment","detail":"MYR 100"},
    {"name":"Minimum Redemption Amount","detail":"500 Units"},
    {"name":"Minimum Holding","detail":"MYR 1000"},
    {"name":"Cooling-off Period (from transaction date)","detail":"6 Business Days"},
    {"name":"Buy Processing Time","detail":"T + 3 business days"},
    {"name":"Redemption Processing Time","detail":"T + 6 business days"},
    ];

  policy = "Distribution of income (if any) will be reinvested in units of the relevant Fund."

  ngOnInit(): void {
  }

}
