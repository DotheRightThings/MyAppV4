import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-i',
  templateUrl: './personal-i.component.html',
  styleUrls: ['./personal-i.component.css']
})
export class PersonalIComponent implements OnInit {

  constructor() { }

  h2="Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    {'name':'Upload Your ID'},
    {'name':'Personal Information'},
    {'name':'Other Information'},
    {'name':'Review'},
  ]

  head_list = [
    {'name':'FATCA Declaration','detail':'I hereby confirm I understand my FATCA requirement. I hereby declare that I am* :'},
    {'name':'Common Reporting Standard','detail':'I hereby confirm I understand my tax residency/CRS requirement. I hereby declare that I am* :'},
  ]

  list_1 = [
    {'type':'Non-US individual with no US indicia'},
    {'type':'Non-US individual with US indicia'},
    {'type':'US individual'},
  ]

  list_2 = [
    {'type':'Tax resident in Malaysia and do not have any foreign tax residency and/or foreign indicia.'},
    {'type':'Tax resident of other country(ies).'},
  ]

  account_i = [
    {'name':'Username* :'},
    {'name':'Password* :'},
    {'name':'Confirm Password* :'},
    {'name':'Security Question* :'},
  ]

  security_q = [
    {'question':'What was the make of your first mobile phone?'},
    {'question':'What was the name of your first pet?'},
    {'question':'What is your favourite car brand?'},
    {'question':'What is your favourite color?'},
    {'question':'What is your favourite sauce for steak?'},
  ]


  ngOnInit(): void {
  }

}
