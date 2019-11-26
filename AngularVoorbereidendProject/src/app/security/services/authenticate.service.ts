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
  //private huidigeGebruikerSubject: BehaviorSubject<Gebruiker>;
  public huidigeGebruiker: Observable<Gebruiker>;
  constructor(private _httpClient: HttpClient) {
    // this.huidigeGebruikerSubject = new BehaviorSubject<Gebruiker>(JSON.parse(localStorage.getItem('huidigeGebruiker')));
    //     this.huidigeGebruiker = this.huidigeGebruikerSubject.asObservable();
  }

  //   public get currentUserValue(): Gebruiker {
  //     return this.huidigeGebruikerSubject.value;
  // }

  // login(username, password) {
  //   return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
  //       .pipe(map(user => {
  //           // store user details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //           this.currentUserSubject.next(user);
  //           return user;
  //       }));
  // }

  // logout() {
  //   // remove user from local storage and set current user to null
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }

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
