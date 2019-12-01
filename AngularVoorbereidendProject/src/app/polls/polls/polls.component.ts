import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Poll } from '../models/poll.model';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Antwoord } from '../models/antwoord.model';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { VriendenService } from 'src/app/vrienden/vrienden.service';
import { PollsService } from '../polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  titelPollIsToegevoegd = false;
  antwoorden: string[] = []
status: string = "";
vrienden: Gebruiker[] =[];
  //pollForm: FormGroup;
  // antwoorden: FormArray;
  // gebruikers: FormArray;
  // itemsForm: FormGroup;
   antwoord: string = '';
   titelPoll: string = "";
   isOk: boolean = false;
  
   naam: string = "";
   gebruikersPoll: PollGebruiker[];
   antwoordenPoll : Antwoord[];
   //nieuwePoll: Poll = new Poll(null, "",new Number(localStorage.getItem("gebruikerID")).valueOf(), this.antwoordenPoll, this.gebruikersPoll);
  
 
  //  pollForm = this.fb.group({
  //    naam: [''],
  //    makerID: localStorage.getItem("gebruikerID"),
  //    antwoorden: this.fb.group({
  //     antwoord: ['']
  //    }),
  //    gebruikersPoll: this.fb.group({
  //      gebruikerID: ['']
  //    })
  //  })
  poll: Poll = new Poll(0, "", 0, [], []);
  pollID: number = 0;
  constructor(private activatedRoute:ActivatedRoute, private fb: FormBuilder, private _pollsService: PollsService) { 
    activatedRoute.paramMap.subscribe(result => {
      console.log(result);
      this.pollID =  new Number(result.get('pollID')).valueOf(); ;
      console.log(this.pollID);
      this.getPoll(this.pollID);
      
    })

    var pollObject = localStorage.getItem('pollObject');
    this.poll =  JSON.parse(pollObject);
    console.log(this.poll);
  }

  ngOnInit() { }

  getPoll(pollID: number){
      this._pollsService.getPoll(pollID).subscribe(result => {
      console.log(result);
      this.poll = result;
     // this.aantalVrienden = result.length;
    })
  }
 

  
}
