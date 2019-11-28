import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Vriendschap } from './models/vriendschap.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VriendenService {

  constructor(private http: HttpClient) { }

  getVriendschappenByGebruiker(): Observable<Vriendschap[]> {
    return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap");
  }

  // getVriendschapverzoekenByGebruiker(): Observable<Vriendschap[]> {
  //   return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap/vriendschapverzoeken", { 
  //     headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token")),
  //     params: new HttpParams().set("gebruikerID", localStorage.getItem("gebruikerID"))
  //   }} );

  //   getVriendschapverzoekenByGebruiker(gebruikerID: number): Observable<Vriendschap[]> {
  //     return this.http.get<Vriendschap[]>("https://localhost:44399/api/vriendschap/vriendschapverzoeken", gebruikerID );
    
  // }
}
