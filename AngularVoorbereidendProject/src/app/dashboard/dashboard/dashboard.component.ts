import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { VriendenService } from 'src/app/vrienden/vrienden.service';
import { Subscription, Observable } from 'rxjs';
import { Vriendschap } from 'src/app/vrienden/models/vriendschap.model';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AddVriendComponent } from 'src/app/vrienden/add-vriend/add-vriend.component';
import { MatDialog } from '@angular/material';
import { AddPollComponent } from 'src/app/polls/add-poll/add-poll.component';
import { Poll } from 'src/app/polls/models/poll.model';
import { PollsService } from 'src/app/polls/polls.service';
import { PollGebruiker } from 'src/app/polls/models/poll-gebruiker.model';
import { faPoll, faPollH } from '@fortawesome/free-solid-svg-icons';
import { filter, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private addVriendComponent = AddVriendComponent;
  private addPollComponent = AddPollComponent;
  tekstVriendschapverzoeken: string = "";
  tekstPollUitnodigingen: string = "";
  aantalVriendschapverzoeken: number = 0;
  aantalPollUitnodigingen: number = 0;
  vriendschapverzoekenSub: Subscription;
  pollSub: Subscription;
  vrienden: Gebruiker[] = [];
  aantalVrienden: number = 0; // totaal aantal om te tonen in de card met de vriendenlijst
  aantalPolls: number = 0;      // totaal aantal om te tonen in de card van met de lijst van polls polls
  mijnGemaaktePolls: Observable<Poll[]>; // polls die door de gebruiker zijn gemaakt
  pollsVrienden: Observable<Poll[]>; // polls van vrienden waarop de gebruiker moet stemmen
  pollsGebruiker: PollGebruiker[] = [];
  faPollH = faPollH;
  faPoll = faPoll;
  gebruikerID: number = 0;
  constructor(private _authenticateService: AuthenticateService, private _vriendenService: VriendenService, public dialog: MatDialog, private _pollService: PollsService, private router: Router) {

    this._authenticateService.isLoggedin.subscribe(e => {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      this.gebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
      this.getAantalVriendschapverzoeken();
      this.getVrienden();
      this.getPollsGebruiker();
      this.getMijnGemaaktePolls();
      this.getPollsVrienden();
      console.log(this.pollsVrienden);
      console.log(this.mijnGemaaktePolls);
    })

    this._pollService.pollIsToegevoegd.subscribe(e => {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      console.log(e);
      if (e == true) {
        this.getMijnGemaaktePolls();
      }
    })
  }

  ngOnInit() { }

  getAantalVriendschapverzoeken() {
    this.vriendschapverzoekenSub = this._vriendenService.getVriendschapverzoekenByGebruiker().subscribe(result => {
      this.aantalVriendschapverzoeken = result.length;

      if (this.aantalVriendschapverzoeken == 1) {
        this.tekstVriendschapverzoeken = "nieuw vriendschapverzoek";
      }
      else {
        this.tekstVriendschapverzoeken = "nieuwe vriendschapverzoeken";
      }
    })
  }

  getPollsGebruiker() {
    this._pollService.getPollsGebruiker().subscribe(result => {
      console.log(result);
      this.pollsGebruiker = result;
      this.aantalPollUitnodigingen = result.length;

      if (this.aantalPollUitnodigingen == 1) {
        this.tekstPollUitnodigingen = "nieuwe uitnodiging";
      }
      else {
        this.tekstPollUitnodigingen = "nieuwe uitnodigingen";
      }
    })
  }

  getMijnGemaaktePolls() {
    this.mijnGemaaktePolls = this._pollService.getPolls()
      .pipe(
        map(polls => { return polls.filter(poll => poll.makerID == this.gebruikerID); }
        )
      )
  }

  getPollsVrienden() {
    this.pollsVrienden = this._pollService.getPolls()
      .pipe(
        map(polls => { return polls.filter(poll => poll.lijstGebruikersPerPoll.filter(gebruiker => gebruiker.gebruikerID == this.gebruikerID).filter(gebruiker => gebruiker.heeftGestemd == false)); })
        , tap(t => {
          this.aantalPolls = t.length;
        })
      )
  }

  stemOpPoll(p) {
    localStorage.setItem("pollObject", JSON.stringify(p));
    this.router.navigate(['/polls']);
  }

  getVrienden() {
    this._vriendenService.getVriendenByGebruiker().subscribe(result => {
      console.log(result);
      this.vrienden = result;
      this.aantalVrienden = result.length;
    })
  }

  public addVriend() {
    this.dialog.open(this.addVriendComponent);
  }

  public addPoll() {
    this.dialog.open(this.addPollComponent, { width: '50%', height: '70%', panelClass: 'custom-modalbox' });
  }
}
