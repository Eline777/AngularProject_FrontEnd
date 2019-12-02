import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { Observable, Subscription } from 'rxjs';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';
import { PollsService } from '../polls/polls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gebruikers: Observable<Gebruiker[]>;
  aantalGebruikers: number = 0;
  aantalGebruikersSub: Subscription;
  aantalPollsSub: Subscription;
  aantalPolls: number = 0;

  constructor(private _gebruikerService: GebruikerService, private _pollService: PollsService) {
    this.getAantalGebruikers();
    this.getAantalPolls();
    console.log(this.aantalPolls);
  }

  ngOnInit() {
  }

  getAantalGebruikers() {
    console.log("test");
    this.aantalGebruikersSub = this._gebruikerService.getAantalGebruikers().subscribe((aantal: number) => {
      this.aantalGebruikers = aantal;
    })
  }

  getAantalPolls() {
    console.log("test");
    this.aantalPollsSub = this._pollService.getAantalPolls().subscribe((aantal: number) => {
      this.aantalPolls = aantal;
    })
  }
}
