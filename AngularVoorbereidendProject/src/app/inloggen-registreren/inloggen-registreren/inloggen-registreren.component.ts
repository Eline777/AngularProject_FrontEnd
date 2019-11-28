import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registreer } from '../models/registreer.model';
import { Login } from '../models/login.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-inloggen-registreren',
  templateUrl: './inloggen-registreren.component.html',
  styleUrls: ['./inloggen-registreren.component.scss']
})
export class InloggenRegistrerenComponent implements OnInit {
isRegistreren: Boolean = false;
isInloggen: Boolean = false;
gebruikerRegistreer: Registreer = new Registreer("", "", "", "", "", "");
gebruikerLogin: Login = new Login("", "");
submitted: Boolean = false;
nieuweGebruiker: Gebruiker = null;
hide = true;


  constructor(private router: Router, private _authenticateService: AuthenticateService, private _gebruikerService: GebruikerService) {
    if(router.url == "/inloggen"){
      this.isInloggen = true;
    }
    if(router.url == "/registreren"){
      this.isRegistreren = true;
    }
    console.log(router.url)

    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      console.log(e);
      //if (e == true){
       // this.router.navigate(['/dashboard']);
     // }
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if(this.isInloggen == true){
      console.log(this.gebruikerLogin);
      this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
        console.log(result);
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        localStorage.setItem("token",result.token);
        localStorage.setItem("gebruikerID", result.gebruikerID.toString());
        localStorage.setItem("voornaam", result.voornaam.toString());
        localStorage.setItem("achternaam", result.achternaam.toString());
        this.router.navigate(['/dashboard']);
        });
    }

    if(this.isRegistreren == true){
      if(this.gebruikerRegistreer.wachtwoord == this.gebruikerRegistreer.wachtwoordBevestiging){
        console.log(this.gebruikerRegistreer);
        this.nieuweGebruiker = new Gebruiker(this.gebruikerRegistreer.email,this.gebruikerRegistreer.wachtwoord, this.gebruikerRegistreer.gebruikersnaam, "", this.gebruikerRegistreer.voornaam, this.gebruikerRegistreer.achternaam);
        //let nieuweGebruiker = new Gebruiker(this.gebruikerRegistreer.email,this.gebruikerRegistreer.wachtwoord, this.gebruikerRegistreer.gebruikersnaam, "");
        console.log(this.nieuweGebruiker)
        this._gebruikerService.addGebruiker(this.nieuweGebruiker).subscribe(result => {
          console.log(result);
        });
       this.router.navigate(['/account-activatie']);
      }
    }  
    }
}
