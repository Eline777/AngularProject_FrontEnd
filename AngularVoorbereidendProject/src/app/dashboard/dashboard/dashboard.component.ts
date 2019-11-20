import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _authenticateService : AuthenticateService) {
    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered

      })
   }

  ngOnInit() {
  }

 
}
