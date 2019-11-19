import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { Login } from 'src/app/inloggen-registreren/models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) { }
  authenticate(login: Login): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>("https://localhost:44399/api/Gebruiker/authenticate", login);
    }
}
