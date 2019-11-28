import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from '../models/poll.model';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Antwoord } from '../models/antwoord.model';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  isAanmaken: Boolean = false;
  isStemmen: Boolean = false;
  titelPollIsToegevoegd = false;
  antwoorden: string[] = []
status: string = "";
  //pollForm: FormGroup;
  // antwoorden: FormArray;
  // gebruikers: FormArray;
  // itemsForm: FormGroup;
   antwoord: string = '';
   titelPoll: string = "";
   isOk: boolean = false;
   //aantalAntwoorden: number;
   naam: string = "";
   gebruikersPoll: PollGebruiker[];
   antwoordenPoll : Antwoord[];
   nieuwePoll: Poll = new Poll(null, "",new Number(localStorage.getItem("gebruikerID")).valueOf(), this.antwoordenPoll, this.gebruikersPoll);
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
  constructor(private router: Router, private fb: FormBuilder) { 
    if(router.url == "/pollMaken"){
      this.isAanmaken = true;
    }
    if(router.url == "/stemmen"){
      this.isStemmen = true;
    }
  }

  ngOnInit() {
    // this.itemsForm = this.fb.group({
    //   naam: '',
    //   antwoord: '',
    //   //gebruikersPoll: this.fb.array([this.maakGebruiker()])
    // })

  //   this.pollForm = this.fb.group({
  //     naam: '',
  //     makerID: localStorage.getItem("gebruikerID"),
  //     antwoorden: this.fb.array([this.maakAntwoord()]),
  //    // gebruikersPoll: this.fb.array([this.maakGebruiker()])
  //   })
   }

  // maakAntwoord(): FormGroup {
  //   return this.fb.group({
  //     antwoord: ''
  //   });
  // }

  // maakGebruiker(): FormGroup {
  //   return this.fb.group({
  //     gebruikerID: ''
  //   });
  // }

  // addTitel(): void{
  //   this.pollForm.controls.naam.setValue(this.titelPoll);
  //  // this.titelPoll = naam;
  // }

  // addAntwoord(): void {
  //   this.antwoorden = this.pollForm.get('antwoorden') as FormArray;
  //   this.antwoorden.push(this.maakAntwoord());
  // }

  // addGebruiker(): void {
  //   this.gebruikers = this.pollForm.get('gebruikers') as FormArray;
  //   this.gebruikers.push(this.maakGebruiker());
  // }
  addNaam(){
    //this.pollForm.controls.naam.setValue(this.titelPoll);
    this.nieuwePoll.naam = this.naam;
    this.titelPoll = this.naam;
    console.log(this.titelPoll);
    console.log(this.nieuwePoll);
   // console.log(this.pollForm.controls.naam.value);
    this.titelPollIsToegevoegd = true;
    console.log(this.titelPoll);
  }

  addAntwoord(): void {
    this.antwoorden.push(this.antwoord);
    console.log(this.antwoorden);
    this.antwoord = "";
    if(this.antwoorden.length >= 2){
     // this.status = "oke";
     this.isOk = true;
    }
   
  }
}
