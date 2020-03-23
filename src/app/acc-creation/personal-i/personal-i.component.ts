import { Component, OnInit } from '@angular/core';
import { Personal_i } from '../models/personal_i.model'
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-personal-i',
  templateUrl: './personal-i.component.html',
  styleUrls: ['./personal-i.component.css']
})
export class PersonalIComponent implements OnInit {

  constructor(private userdataservice: UserDataService) {

  }

  model = new Personal_i('', '');
  submitted = false;
  username: string = "";
  password: string = "";

  onSubmit() { this.submitted = true; }


  newPersonal_i() {
    console.log(this.model.username, this.model.password);
    this.userdataservice.setOption('username', this.model.username);
    this.userdataservice.setOption('password', this.model.password);

  }

  h2 = "Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    { 'name': 'Upload Your ID' },
    { 'name': 'Personal Information' },
    { 'name': 'Other Information' },
    { 'name': 'Review' },
  ]

  head_list = [
    { 'name': 'FATCA Declaration', 'detail': 'I hereby confirm I understand my FATCA requirement. I hereby declare that I am* :' },
    { 'name': 'Common Reporting Standard', 'detail': 'I hereby confirm I understand my tax residency/CRS requirement. I hereby declare that I am* :' },
  ]

  list_1 = [
    { 'type': 'Non-US individual with no US indicia' },
    { 'type': 'Non-US individual with US indicia' },
    { 'type': 'US individual' },
  ]

  list_2 = [
    { 'type': 'Tax resident in Malaysia and do not have any foreign tax residency and/or foreign indicia.' },
    { 'type': 'Tax resident of other country(ies).' },
  ]

  account_i = [
    { 'name': 'Username* :' },
    { 'name': 'Password* :' },
    { 'name': 'Confirm Password* :' },
    { 'name': 'Security Question* :' },
  ]

  security_q = [
    { 'question': 'What was the make of your first mobile phone?' },
    { 'question': 'What was the name of your first pet?' },
    { 'question': 'What is your favourite car brand?' },
    { 'question': 'What is your favourite color?' },
    { 'question': 'What is your favourite sauce for steak?' },
  ]

  personal_i = [
    { 'name': 'Salutation* :' },
    { 'name': 'Full Name (as per NRIC/Passport)* :' },
    { 'name': 'NRIC Number/Passport (non Malaysian citizen)* :' },
    { 'name': 'Date of Birth* :' },
    { 'name': 'Country of Birth* :' },
    { 'name': 'Nationality* :' },
    { 'name': 'Bumiputera Status* :' },
    { 'name': 'Race* :' },
    { 'name': 'Gender* :' },
    { 'name': 'Marital Status* :' }
  ]

  address_i = [
    { 'name': 'Address Line 1* :' },
    { 'name': 'Address Line 2 :' },
    { 'name': 'Address Line 3 :' },
    { 'name': 'Postal Code* :' },
    { 'name': 'Town/City* :' },
    { 'name': 'State* :' },
    { 'name': 'Country* :' },
    { 'name': 'Is your correspondence address same as your permanent address?* :' },
  ]

  contact_i = [
    { 'name': 'Email Address* :' },
    { 'name': 'Mobile Number* :' },
    { 'name': 'Residence/House Number :' },
    { 'name': 'Office Number :' }
  ]

  salutations = [
    { 'salutes': 'Mr' },
    { 'salutes': 'Mrs' },
    { 'salutes': 'Ms' }
  ]

  countries = [
    { 'country': 'Malaysia' },
    { 'country': 'China' },
    { 'country': 'Italy' },
    { 'country': 'Spain' }
  ]

  nationalities = [
    { 'nationality': 'Malaysia' },
    { 'nationality': 'China' },
    { 'nationality': 'Italy' },
    { 'nationality': 'Spain' }
  ]

  races = [
    { 'race': 'Malay' },
    { 'race': 'Chinese' },
    { 'race': 'India' },
    { 'race': 'Others' },
  ]

  mar_status = [
    { 'status': 'Single' },
    { 'status': 'Married' },
    { 'status': 'Divorced' },
    { 'status': 'Widowed' },
  ]

  states = [
    { 'state': 'WILAYAH PERSEKUTUAN KUALA LUMPUR' },
    { 'state': 'WILAYAH PERSEKUTUAN PUTRAJAYA' },
    { 'state': 'WILAYAH PERSEKUTUAN LABUAN' },
    { 'state': 'NEGERI SEMBILAN' },
    { 'state': 'SELANGOR' },
    { 'state': 'MELAKA' },
    { 'state': 'JOHOR' },
    { 'state': 'PAHANG' },
    { 'state': 'PERAK' },
    { 'state': 'KEDAH' },
    { 'state': 'PERLIS' },
    { 'state': 'PENANG' },
    { 'state': 'KELANTAN' },
    { 'state': 'TERENGGANU' },
    { 'state': 'SABAH' },
    { 'state': 'SARAWAK' }
  ]

  countries_C = [
    { 'country': 'MALAYSIA' },
    { 'country': 'CHINA' },
    { 'country': 'ITALY' },
    { 'country': 'SPAIN' }
  ]

  country_codes = [
    { 'code': '+60' },
    { 'code': '+86' },
    { 'code': '+39' },
    { 'code': '+34' }
  ]


  ngOnInit(): void {
  }

}
