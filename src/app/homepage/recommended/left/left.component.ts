import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  values = '';

  onKey(event: any){
    this.values = event.target.value;
  }

  periods=[
      {"name":"1 year"},
      {"name":"2 year"},
      {"name":"3 year"},
      {"name":"4 year"},
      {"name":"5 year"},
      {"name":"6 year"},
      {"name":"7 year"},
      {"name":"8 year"},
      {"name":"9 year"},
      {"name":"10 year"},
    ];
  risks=[
      {"name":"All risk"},
      {"name":"Very low"},
      {"name":"Low"},
      {"name":"Medium"},
      {"name":"High"},
      {"name":"Very high"},
  ];
  ngOnInit(){}
}
