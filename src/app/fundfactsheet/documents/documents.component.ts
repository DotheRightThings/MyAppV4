import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  documents = [
    {"prefix":"P","term":"Prospectus"},
    {"prefix":"AR","term":"Semi-annual/Annual Report"},
    {"prefix":"PH","term":"Product Highlights Sheet"},
    {"prefix":"FF","term":"Fund Factsheet"},
    ];;

  ngOnInit(): void {
  }

}
