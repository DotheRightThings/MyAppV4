import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {

  constructor() { }

  objective = "The Fund seeks to achieve capital appreciation in the long term through investments in Shariah-compliant equities and equity related securities. (formerly known as Aberdeen Islamic Asia Pacific Ex Japan Equity Fund - Class MYR - A Acc)"

  ngOnInit(): void {
  }

}
