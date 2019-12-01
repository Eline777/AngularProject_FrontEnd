import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/message-service/message.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Poll } from '../models/poll.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Antwoord } from '../models/antwoord.model';
import { faEdit, faCheck, faTrash, faCheckCircle, faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { VriendenService } from 'src/app/vrienden/vrienden.service';
import { PollsService } from '../polls.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent {
  titelPollIsToegevoegd = false;
  antwoorden: string[] = []
  vriendenPoll: Gebruiker[] = [];
   antwoord: string = '';
   titelPoll: string = "";
   aantalAntwoordenIsOk: boolean = false; // Er moeten minsten twee antwoorden bij een poll zijn
   toonVrienden: boolean = false; // wanneer de naam en aantal antwoorden van de poll in orde zijn kan de gebruiker vrienden uitnodigen om te stemmen
   aantalVriendenIsOk: boolean = false; // Er moet minsten één vriend zijn die kan stemmen
   naam: string = "";
   gebruikersPoll: PollGebruiker[] = [];
   antwoordenPoll : Antwoord[] = [];
nieuwePoll: Poll = null;

 alleVrienden: Gebruiker[] = [];

   iconNaamPoll: string = "done";
   faEdit = faEdit;
   faCheck = faCheck;
   faTrash = faTrash;
   faCheckCircle = faCheckCircle;
   faPlus = faPlus;
   faPlusCircle = faPlusCircle;

  vriendenForm = this.fb.group({
    vrienden: [[''], Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPollComponent>,  // Used by the html component.
    private _vriendenService: VriendenService,
    private _messageService: MessagesService,
    private _pollService: PollsService
  ) {}

   ngOnInit(){
     this.getVrienden();
   }

  private success() {
    this._messageService.openDialog('Succes', 'De poll is aangemaakt en uw vrienden zijn uitgenodigd om te stemmen.');
  }

  private handleError(error) {
    this._messageService.openDialog('Error', 'Er is iets mis gegaan.');
  }

  addNaam(){
    this.titelPoll = this.naam;
    console.log(this.titelPoll);
    this.titelPollIsToegevoegd = true;
    console.log(this.titelPoll);
  }

  addAntwoord(): void {
    this.antwoorden.push(this.antwoord);
    console.log(this.antwoorden);
    this.antwoord = "";
    if(this.antwoorden.length >= 2){ // minstens twee antwoorden nodig om een poll te maken
     this.aantalAntwoordenIsOk = true;
    }
  }

  toonCardVrienden(){
    this.toonVrienden = true;
  }

  onSelectionChangeVriend(geselecteerdeVrienden: Gebruiker[]){
    this.vriendenPoll = geselecteerdeVrienden;
    console.log(this.vriendenPoll);
    if(this.vriendenPoll.length >= 1){ // minstens 1 vriend uitnodigen om te stemmen
      this.aantalVriendenIsOk = true;
     }
  }

  getVrienden(){
    this._vriendenService.getVriendenByGebruiker().subscribe(result => {
      console.log(result);
      this.alleVrienden = result;
    })
  }

  addPoll(){
    for (let item of this.antwoorden){
      var antwoord = new Antwoord(0, item, 0, null);
     this.antwoordenPoll.push(antwoord);
    }
    for (let vriend of this.vriendenPoll){
      var pollGebruiker = new PollGebruiker(0, 0, vriend.gebruikerID, false);
      this.gebruikersPoll.push(pollGebruiker);
    }
    this.nieuwePoll = new Poll(0, this.titelPoll, new Number(localStorage.getItem("gebruikerID")).valueOf(), this.antwoordenPoll, this.gebruikersPoll);
    
    console.log(this.nieuwePoll);
      this._pollService.addPoll(this.nieuwePoll).subscribe(result => {
       console.log(result);
       if(result != null){ // wanneer poll is aangemaakt wordt een succesboodschap getoond
        this.success();
        this.vriendenPoll = [];
        this.antwoorden = [];
        this.vriendenForm.controls.reset;
        this.titelPoll = ""; this.naam = ""; this.antwoordenPoll = null; // tekstvelden terug leegmaken, zodat de gebruiker een volgende poll kan maken
        this._pollService.pollIsToegevoegd = new BehaviorSubject(true); // om het dashboard up te daten, zodat de nieuwe poll ook in de lijst staat
       }
     },
     (err: HttpErrorResponse) => {
       console.log(err.error);
       console.log(err.message);
       this.handleError(err);
      });
  }
 
    deleteAntwoord(antwoord: string){
    const index: number =  this.antwoorden.indexOf(antwoord);
   if (index !== -1) {
     this.antwoorden.splice(index, 1);
   }   
   console.log(this.antwoorden);     
 }
}
