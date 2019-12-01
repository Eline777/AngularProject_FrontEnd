import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Poll } from './models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  getAantalPolls(): Observable<number> {
    return this.http.get<number>("https://localhost:44399/api/poll/aantal", {
    });
  }

  addPoll(poll: Poll) {
    return this.http.post<Poll>("https://localhost:44399/api/poll", poll);
  }
}
