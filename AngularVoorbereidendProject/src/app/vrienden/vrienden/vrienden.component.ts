import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { VriendenService } from '../vrienden.service';
import { AddVriendComponent } from '../add-vriend/add-vriend.component';
import { faEdit, faCheck, faTrash, faCheckCircle, faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Vriendschap } from '../models/vriendschap.model';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.scss']
})
export class VriendenComponent implements OnInit {
  private addVriendComponent = AddVriendComponent;
  vrienden: Gebruiker[] = [];
  aantalVrienden : number = 0; // totaal aantal om te tonen in de card met de vriendenlijst
  faEdit = faEdit;
   faCheck = faCheck;
   faTrash = faTrash;
   faCheckCircle = faCheckCircle;
   faPlus = faPlus;
   faPlusCircle = faPlusCircle;
   vriendschapverzoekenSub: Subscription;
   vriendschapverzoeken: Vriendschap[] = [];
   aantalVriendschapverzoeken: number = 0;
   tekstVriendschapverzoeken : string = "";

  constructor(private _vriendenService: VriendenService, public dialog: MatDialog) {
    this.getVrienden();
    this.getVriendschapverzoeken();
   }

  ngOnInit() {
  }

  getVrienden(){
    this._vriendenService.getVriendenByGebruiker().subscribe(result => {
      console.log(result);
      this.vrienden = result;
      this.aantalVrienden = result.length;
    })
  }

  getVriendschapverzoeken(){
    // console.log("test vriendschapverzoeken");
     this.vriendschapverzoekenSub = this._vriendenService.getVriendschapverzoekenByGebruiker().subscribe(result => {
       this.vriendschapverzoeken = result;
 
       if(this.aantalVriendschapverzoeken == 1){
         this.tekstVriendschapverzoeken = "nieuw vriendschapverzoek";
       }
       else{
         this.tekstVriendschapverzoeken = "nieuwe vriendschapverzoeken";
       }
     })
   }

  
  public addVriend() {
    this.dialog.open(this.addVriendComponent);
  }
}
