import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registreer } from '../models/registreer.model';
import { Login } from '../models/login.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';

@Component({
  selector: 'app-inloggen-registreren',
  templateUrl: './inloggen-registreren.component.html',
  styleUrls: ['./inloggen-registreren.component.scss']
})
export class InloggenRegistrerenComponent implements OnInit {
isRegistreren: Boolean = false;
isInloggen: Boolean = false;
gebruikerRegistreer: Registreer = new Registreer("", "", "", "");
gebruikerLogin: Login = new Login("", "");
submitted: Boolean = false;

  constructor(private router: Router, private _authenticateService: AuthenticateService, private _gebruikerService: GebruikerService) {
    if(router.url == "/inloggen"){
      this.isInloggen = true;
    }
    if(router.url == "/registreren"){
      this.isRegistreren = true;
    }
    //console.log(router.url)
   }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if(this.isInloggen == true){
      console.log(this.gebruikerLogin);
      this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
        localStorage.setItem("token",result.token);
        this.router.navigateByUrl("/dashboard");
        });
    }
    if(this.isRegistreren == true){
      if(this.gebruikerRegistreer.wachtwoord == this.gebruikerRegistreer.wachtwoordBevestiging){
        console.log(this.gebruikerRegistreer);
        let nieuweGebruiker = new Gebruiker(this.gebruikerRegistreer.email,this.gebruikerRegistreer.wachtwoord, this.gebruikerRegistreer.gebruikersnaam, "");
        console.log(nieuweGebruiker)
        this._gebruikerService.addGebruiker(nieuweGebruiker).subscribe();
      }
    }


     
    
     
    }

}
