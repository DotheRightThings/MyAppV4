import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-i',
  templateUrl: './other-i.component.html',
  styleUrls: ['./other-i.component.css']
})
export class OtherIComponent implements OnInit {

  constructor() { }

  h2 = "Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    { 'name': 'Upload Your ID' },
    { 'name': 'Personal Information' },
    { 'name': 'Other Information' },
    { 'name': 'Review' },
  ]

  other_i = "Mother"

  occup_i = [
    { 'name': 'Source of Income* :' },
    { 'name': 'Occupation* :' },
    { 'name': 'Name of Employer / Business* :' },
    { 'name': "Employer's / Business Office* :", 'names': "Employer" },
    { 'name': 'Nature of Business* :' },
    { 'name': 'Annual Income* :' },
    { 'name': 'Estimate Net Worth* :' }
  ]

  serv_ag = [
    { 'name': 'Do you have a preferred Agent?* :' },
    { 'name': 'Agent Code :' },
  ]

  source_of_inc = [
    { 'type': 'Employment' },
    { 'type': 'Self-Employed' },
    { 'type': 'Owner of Business' },
    { 'type': 'Investor' }
  ]

  type_of_inc = [
    { 'type': 'Permanent' },
    { 'type': 'Temporary' },
    { 'type': 'Contract' }
  ]

  occupations = [
    { 'type': 'Professional' },
    { 'type': 'Teacher' },
    { 'type': 'Businessman' },
    { 'type': 'Labour' },
    { 'type': 'Other' },
  ]

  offices_loc = [
    { 'type': 'Outside of Malaysia' },
    { 'type': 'Within Malaysia' }
  ]

  nature_of_bus = [
    { 'type': 'Extractors' },
    { 'type': 'Manufacturers' },
    { 'type': 'Marketers' },
    { 'type': 'Service Business' }
  ]

  annual_inc = [
    { 'range': 'Below MYR 200,000' },
    { 'range': 'Below MYR 100,000' },
    { 'range': 'Below MYR 80,000' },
    { 'range': 'Below MYR 50,000' },
    { 'range': 'Below MYR 25,000' }
  ]

  net_worth = [
    { 'range': 'Below MYR 1,000,000' },
    { 'range': 'Below MYR 500,000' },
    { 'range': 'Below MYR 200,000' },
    { 'range': 'Below MYR 100,000' },
    { 'range': 'Below MYR 80,000' },
    { 'range': 'Below MYR 50,000' }
  ]

  ngOnInit(): void {
  }

}
