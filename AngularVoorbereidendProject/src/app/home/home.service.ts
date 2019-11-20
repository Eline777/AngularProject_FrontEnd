import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44399/api/gebruiker", {
    //headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
});
}
}
