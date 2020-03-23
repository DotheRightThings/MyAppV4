import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  @Input() funds;

  ngOnInit() { }
}
