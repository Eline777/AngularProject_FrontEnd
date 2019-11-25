import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from './models/gebruiker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) {}

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44399/api/gebruiker", gebruiker);
    }

  controleerActivatieGebruiker(gebruikerID: Number, activatiecode: any){
    return this.http.post<Gebruiker>("https://localhost:44399/api/gebruiker/confirmEmail", gebruikerID, activatiecode);
  }

  getAantalGebruikers(): Observable<number> {
    return this.http.get<number>("https://localhost:44399/api/gebruiker/aantal", {
    //headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
});
  }
  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44399/api/gebruiker", {
    //headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
  });
  }

}
