import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { VriendenService } from 'src/app/vrienden/vrienden.service';
import { Subscription } from 'rxjs';
import { Vriendschap } from 'src/app/vrienden/models/vriendschap.model';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AddVriendComponent } from 'src/app/vrienden/add-vriend/add-vriend.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private addVriendComponent = AddVriendComponent;
  tekstVriendschapverzoeken : string = "";
  tekstPollUitnodigingen : string = "";
  aantalVriendschapverzoeken: number = 0;
  aantalPollUitnodigingen: number = 0;
  vriendschapverzoekenSub: Subscription;
  vrienden: Gebruiker[] = [];
  aantalVrienden : number = 0;
  aantalPolls: number = 0;
  constructor(private _authenticateService : AuthenticateService, private _vriendenService: VriendenService, public dialog: MatDialog) {
    this.getAantalVriendschapverzoeken();
    this.getVrienden();
    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
     // this.getAantalVriendschapverzoeken();
      })
   }

  ngOnInit() { }

  getAantalVriendschapverzoeken(){
    console.log("test vriendschapverzoeken");
    this.vriendschapverzoekenSub = this._vriendenService.getVriendschapverzoekenByGebruiker().subscribe(result => {
      this.aantalVriendschapverzoeken = result.length;

      if(this.aantalVriendschapverzoeken == 1){
        this.tekstVriendschapverzoeken = "nieuw vriendschapverzoek";
      }
      else{
        this.tekstVriendschapverzoeken = "nieuwe vriendschapverzoeken";
      }
    })
  }
 
getVrienden(){
  this._vriendenService.getVriendenByGebruiker().subscribe(result => {
    console.log(result);
    this.vrienden = result;
    this.aantalVrienden = result.length;
  })
}

public addVriend() {
  this.dialog.open(this.addVriendComponent);
}

}
