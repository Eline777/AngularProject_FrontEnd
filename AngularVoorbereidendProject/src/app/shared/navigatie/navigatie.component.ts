import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';


@Component({
  selector: 'app-navigatie',
  templateUrl: './navigatie.component.html',
  styleUrls: ['./navigatie.component.scss']
})
export class NavigatieComponent implements OnInit {
voornaam: string;
achternaam: string;
gebruikerID: number = -1;
  constructor(private _authenticateService: AuthenticateService) {
    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      if(e == true){
        this.gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
        this.voornaam = localStorage.getItem("voornaam");
        this.achternaam = localStorage.getItem("achternaam");
      }
     
      }) 
   }

  ngOnInit() {
  }

}
