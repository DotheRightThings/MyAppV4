import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ways',
  templateUrl: './ways.component.html',
  styleUrls: ['./ways.component.css']
})
export class WaysComponent implements OnInit{
    ways = [
        {"imgsrc":"https://i.imgur.com/vgi0nEG.jpg","type":"Portfolio Simulator","description":"We have crafted investment portfolios using our recommended funds to help you manage risk while maximising performing potentional.","advice":"Leave it to an expert."},
        {"imgsrc":"https://i.imgur.com/F3dx8Zs.jpg","type":"Fund Selector","description":"Choose and compare the wide range of fund offered on our platform using our Fund Selector by selecting your preffered criteria.","advice":"Browse our funds."},
        {"imgsrc":"https://i.imgur.com/x7CiDDS.jpg","type":"Meet Your Advisor","description":"Speak to us to obtain financial advice tailored to your personal goals and create a plan to secure your future.","advice":"Talk to the expert."},
        ];
    ngOnInit(){}
}
