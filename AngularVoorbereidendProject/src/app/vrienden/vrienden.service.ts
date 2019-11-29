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
   // let paramsGebruiker = new HttpParams().set('gebruikerID', localStorage.getItem("gebruikerID"));
    return this.http.get<Gebruiker[]>("https://localhost:44399/api/vriendschap/vrienden/" + gebruikerID);
  }

  // getVriendenByGebruiker(): Observable<any> {
  //   let paramsGebruiker = new HttpParams().set('gebruikerID', localStorage.getItem("gebruikerID"));
  //   return this.http.get("https://localhost:44399/api/vriendschap/vrienden/", {params: paramsGebruiker});
  // }

  // getVriendschapverzoekenByGebruiker(): Observable<Vriendschap[]> {
  //   return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap/vriendschapverzoeken", { 
  //     headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token")),
  //     params: new HttpParams().set("gebruikerID", localStorage.getItem("gebruikerID"))
  //   }} );

    getVriendschapverzoekenByGebruiker(): Observable<Vriendschap[]> {
      var gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
      return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap/vriendschapverzoeken/" + gebruikerID );
  }

  addVriendschap(vriendschap: Vriendschap) {
    return this.http.post<Vriendschap>("https://localhost:44399/api/vriendschap", vriendschap);
    }

}
