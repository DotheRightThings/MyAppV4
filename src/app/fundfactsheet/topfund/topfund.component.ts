import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topfund',
  templateUrl: './topfund.component.html',
  styleUrls: ['./topfund.component.css']
})
export class TopfundComponent implements OnInit {

  constructor() { }

  funds = [
    {"name":"G Opportunity Fund","percent":31.63},
    {"name":"B Growth Fund","percent":-0.70},
    {"name":"H Sukuk Fund - USD","percent":31.26},
    {"name":"F Balanced Fund - MYR","percent":26.72},
    {"name":"R Asia (Ex Japan) Opportunity Fund - USD","percent":19.75},
    {"name":"B Balanced Fund A Acc USD","percent":25.56},
    {"name":"P Income Fund E Acc USD","percent":25.32},
    {"name":"T Emerging Market Bond Fund Retail (Gross) Acc USD","percent":21.03}
  ];

  update ="Last Updated: 5 Nov 2019. Figures are based on 1Y period."

  ngOnInit(): void {
  }


}
