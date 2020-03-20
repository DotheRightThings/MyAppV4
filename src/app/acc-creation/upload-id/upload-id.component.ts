import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.css'],

})
export class UploadIdComponent implements OnInit {

  constructor() { }

  h2="Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    {'name':'Upload Your ID'},
    {'name':'Personal Information'},
    {'name':'Other Information'},
    {'name':'Review'},
  ]

  ngOnInit(): void {
  }

}