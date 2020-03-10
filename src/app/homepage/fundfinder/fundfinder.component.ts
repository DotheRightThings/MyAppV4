import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundfinder',
  templateUrl: './fundfinder.component.html',
  styleUrls: ['./fundfinder.component.css']
})
export class FundfinderComponent implements OnInit {
  funds=[
    {"name":"Search fund"},
    {"name":"RHB Google Fund"},
    {"name":"RHB Microsoft Fund"},
    {"name":"RHB Apple Fund"},
    {"name":"RHB Transformer Fund"},
    {"name":"RHB Titanic Fund"},
    {"name":"RHB London Bridge Fund"},
    {"name":"RHB Nothing to Fund"},
  ];
  ngOnInit(){}
}
