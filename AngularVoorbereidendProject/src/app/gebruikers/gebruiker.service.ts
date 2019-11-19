import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from './models/gebruiker.model';

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
}
