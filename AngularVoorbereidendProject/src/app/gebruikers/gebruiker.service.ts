import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from './models/gebruiker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44399/api/gebruiker", gebruiker);
  }

  controleerActivatieGebruiker(activatiecode: any) {
    return this.http.post<any>("https://localhost:44399/api/gebruiker/confirmEmail/" + activatiecode, null);
  }

  getAantalGebruikers(): Observable<number> {
    return this.http.get<number>("https://localhost:44399/api/gebruiker/aantal", {
      //headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}