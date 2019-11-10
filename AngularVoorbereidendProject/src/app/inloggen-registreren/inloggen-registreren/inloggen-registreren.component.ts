import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registreer } from '../models/registreer.model';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-inloggen-registreren',
  templateUrl: './inloggen-registreren.component.html',
  styleUrls: ['./inloggen-registreren.component.scss']
})
export class InloggenRegistrerenComponent implements OnInit {
registreren: Boolean = false;
inloggen: Boolean = false;
gebruikerRegistreer: Registreer = new Registreer("", "", "");
gebruikerLogin: Login = new Login("", "");
tekstKnop = "";

  constructor(private router: Router) {
    if(router.url == "/inloggen"){
      this.inloggen = true;
      this.tekstKnop = "Inloggen";
    }
    if(router.url == "/registreren"){
      this.registreren = true;
      this.tekstKnop = "Registreren";
    }
    //console.log(router.url)
   }

  ngOnInit() {
  }

}
