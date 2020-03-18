import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor() { }

  disclaimers = [
    {"detail":"Unit price is the NAV price, sales charges are not included."},
    {"detail":"Investment involves risk. The price of securities may go down as well as up, and under certain circumstances an investor may sustain a total or substantial loss of investment. Past performance is not necessarily indicative of the future or likely performance of the fund. Investors should read the relevant fund's prospectus for details before making any investment decision. An Investor should make an appraisal of the risks involved in investing in these products and should consult their own independent and professional advisors, to ensure that any decision made is suitable with regards to their circumstances and financial position."},
    {"detail":"Users should always wash their hands before operating any investment to avoid infection of Corona virus."},
    {"detail":"Users should always wash their hands before operating any investment to avoid infection of Corona virus."},
    {"detail":"Users should always wash their hands before operating any investment to avoid infection of Corona virus."},
    {"detail":"Users should always wash their hands before operating any investment to avoid infection of Corona virus."},
    {"detail":"Users should always wash their hands before operating any investment to avoid infection of Corona virus."}
  ];

  ngOnInit(): void {
  }

}
