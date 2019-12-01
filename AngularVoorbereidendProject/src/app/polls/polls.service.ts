import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Poll } from './models/poll.model';
import { PollGebruiker } from './models/poll-gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  pollIsToegevoegd = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  getAantalPolls(): Observable<number> { // Om het totaal te tonen op de homepagina
    return this.http.get<number>("https://localhost:44399/api/poll/aantal", {
    });
  }

  getPollsGebruiker(): Observable<PollGebruiker[]> {
    var gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    return this.http.get<PollGebruiker[]>("https://localhost:44399/api/gebruiker/pollsGebruiker/" + gebruikerID );
}

getPolls(): Observable<Poll[]>{
  return this.http.get<Poll[]>("https://localhost:44399/api/poll/");
}

  addPoll(poll: Poll) {
    return this.http.post<Poll>("https://localhost:44399/api/poll", poll);
  }

  getPoll(id: number): Observable<Poll>{
    return this.http.get<Poll>("https://localhost:44399/api/poll/" + id );
  }
}
