import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  announcements = [
    {"name":"Malaysia Public Holiday*","detail":"No upcoming public holiday"},
    {"name":"Fund Holiday**","detail":"No upcoming fund holiday"},
    {"name":"Fund Related Notice","detail":"-"},
  ];

  notice1 = "*There will be no pricing on Malaysia Public Holidays and Fund Holidays declared by individual fund managers. Pricing of the funds will be resumed on the following business day."
  notice2 = "**The above fund holidays are based on the latest information provided by the individual fund managers. Omissions may occur in the event that RHB Investment is not informed on time."
  
  ngOnInit(): void {
  }

}
