import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { VriendenService } from 'src/app/vrienden/vrienden.service';
import { Subscription } from 'rxjs';
// import { faPoll } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // faPoll = faPoll;
  aantalVriendschapverzoeken: number = 0;
  aantalPollUitnodigingen: number = 0;
  vriendschapverzoekenSub: Subscription;
  constructor(private _authenticateService : AuthenticateService, private _vriendenService: VriendenService) {
    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
     // this.getAantalVriendschapverzoeken();
      })
   }

  ngOnInit() {
  }

  // getAantalVriendschapverzoeken(){
  //   console.log("test vriendschapverzoeken");
  //   this.vriendschapverzoekenSub = this._vriendenService.getVriendschappenByGebruiker().subscribe(result => {
  //     this.aantalVriendschapverzoeken = result.length;
  //   })
  // }
 
}
