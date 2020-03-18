import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {

  constructor() { }

  risks = [
    {"type":"3Y Annualised Volatility","percentage":11.53},
    {"type":"3Y Sharpe Ratio","percentage":-0.30}
  ];

  update = "The above figures are as at Jan 31, 2020. Last updated on Feb 3, 2020."

  ngOnInit(): void {
  }

}
