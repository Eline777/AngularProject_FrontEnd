import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Vriendschap } from './models/vriendschap.model';
import { Observable } from 'rxjs';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class VriendenService {

  constructor(private http: HttpClient) { }

  getVriendenByGebruiker(): Observable<Gebruiker[]> {
    var gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    return this.http.get<Gebruiker[]>("https://localhost:44399/api/vriendschap/vrienden/" + gebruikerID);
  }

  getVriendschapverzoekenByGebruiker(): Observable<Vriendschap[]> {
    var gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap/vriendschapverzoeken/" + gebruikerID);
  }

  addVriendschap(vriendschap: Vriendschap) {
    return this.http.post<any>("https://localhost:44399/api/vriendschap", vriendschap);
  }
}
