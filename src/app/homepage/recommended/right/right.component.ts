import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
    funds = [
        {"marketname":"RHB Asian Real Estate Fund","price":0.4512,"percent":"6.61"},
        {"marketname":"RHB Cash Management Fund 2","price":1.4135,"percent":"3.40"},
        {"marketname":"RHB Bond Fund","price":0.9486,"percent":"5.99"},
        {"marketname":"RHB Golden Dragon Fund","price":0.559,"percent":"3.58"},
        ];;
    
        ngOnInit() {}

}
