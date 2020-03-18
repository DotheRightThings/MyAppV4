import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
    funds = [
    {"marketname":"RHB China-India Dynamic Growth Fund","price":0.9855,"percent":"3.81"},
    {"marketname":"RHB Energy Fund","price":0.3632,"percent":"2.57"},
    {"marketname":"RHB-GS US Equity Fund","price":1.2338,"percent":"2.46"},
    {"marketname":"RHB Dana Hazeem","price":0.6928,"percent":"2.30"},
    {"marketname":"RHB Shariah China Focus Fund - MYR","price":1.2716,"percent":"2.01"},
    {"marketname":"RHB Emerging Markets Bond Fund","price":0.6021,"percent":"1.07"},
    {"marketname":"RHB Golden Dragon Fund","price":0.559,"percent":"0.23"},
    {"marketname":"RHB Dana Hazeem","price":0.4275,"percent":"0.12"}
    ];

    ngOnInit() {}
}
