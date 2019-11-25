import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  getAantalPolls(): Observable<number> {
    return this.http.get<number>("https://localhost:44399/api/polls/aantal", {

});
}
}
