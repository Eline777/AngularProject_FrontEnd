import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { Login } from 'src/app/inloggen-registreren/models/login.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  isLoggedin = new BehaviorSubject(localStorage.getItem("token") ? true : false);
  public huidigeGebruiker: Observable<Gebruiker>;
  constructor(private _httpClient: HttpClient) { }

 

  logout() {
    // remove user from local storage and set current user to null
    //localStorage.removeItem("token");
    localStorage.clear();
   // this.isLoggedin = new BehaviorSubject(false);
   this.isLoggedin = new BehaviorSubject(localStorage.getItem("token") ? true : false);
  }

  authenticate(login: Login): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>("https://localhost:44399/api/Gebruiker/authenticate", login);
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
