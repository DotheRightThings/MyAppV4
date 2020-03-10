import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  description = "Aberdeen Standard Islamic Asia Pacific Ex Japan Equity Fund - MYR A Acc Performance Chart over the last 3 years"
  analys1 = "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Performance figures of over 1 year are annualised. (Eg. A 33.1% gain in 3 years works out to a 10% gain per year when annualised.) Last updated on Aug 7, 2019."
  analys2 = "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Last updated on Aug 7, 2019."
  analys3 = "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Last updated on Aug 7, 2019."
  analys4 = "Figures are updated as at Feb 3, 2020. Kindly note that NAV figures above are not divided-adjusted figures."

  annuals=[
    {"time":"3M","percentage":"6.37%","color":"#5CD27C"},
    {"time":"6M","percentage":"2.94%","color":"#5CD27C"},
    {"time":"1Y","percentage":"8.54%","color":"#5CD27C"},
    {"time":"2Y","percentage":"5.89%","color":"#5CD27C"},
    {"time":"3Y","percentage":"1.46%","color":"#5CD27C"},
    {"time":"5Y","percentage":"-","color":"#777777"},
    {"time":"10Y","percentage":"-","color":"#777777"}
  ];

  cumulatives=[
    {"time":"1W","percentage":"4.81%","color":"#5CD27C"},
    {"time":"1M","percentage":"7.90%","color":"#5CD27C"},
    {"time":"3M","percentage":"6.37%","color":"#5CD27C"},
    {"time":"6M","percentage":"2.94%","color":"#5CD27C"},
    {"time":"YTD","percentage":"0.53%","color":"#5CD27C"},
    {"time":"1Y","percentage":"8.54%","color":"#5CD27C"},
    {"time":"3Y","percentage":"4.33%","color":"#5CD27C"},
    {"time":"5Y","percentage":"-","color":"#777777"},
    {"time":"10Y","percentage":"-","color":"#777777"},
    {"time":"Launch","percentage":"0.53%","color":"#5CD27C"}
  ];

  calenders=[
    {"year":"2018","percentage":"-10.94%","color":"#FF7575"},
    {"year":"2017","percentage":"7.15%","color":"#5CD27C"},
    {"year":"2016","percentage":"5.34%","color":"#5CD27C"},
    {"year":"2015","percentage":"-","color":"#777777"},
    {"year":"2014","percentage":"-","color":"#777777"}
  ];

  historicals=[
    {"period":"1Y High","price":"MYR 1.1052"},
    {"period":"1Y Low","price":"MYR 0.9849"},
    {"period":"3Y High","price":"MYR 1.1704"},
    {"period":"3Y Low","price":"MYR 0.9406"},
    {"period":"All-time High","price":"MYR 1.1704"},
    {"period":"All-time Low","price":"MYR 0.8875"},
  ]

  ngOnInit(): void {
  }

}
