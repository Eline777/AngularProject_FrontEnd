import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Poll } from '../models/poll.model';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Antwoord } from '../models/antwoord.model';
import { FormBuilder } from '@angular/forms';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { PollsService } from '../polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
   //antwoordenPoll : Antwoord[];
  poll: Poll = new Poll(0, "", 0, [], []);
  pollID: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private _pollsService: PollsService) { 
    activatedRoute.paramMap.subscribe(result => {
      console.log(result);
      this.pollID =  new Number(result.get('pollID')).valueOf(); ;
      console.log(this.pollID);
      this.getPoll(this.pollID);
    })
  }

  ngOnInit() { }

  getPoll(pollID: number){
      this._pollsService.getPoll(pollID).subscribe(result => {
      console.log(result);
      this.poll = result;
    })
  }
}
