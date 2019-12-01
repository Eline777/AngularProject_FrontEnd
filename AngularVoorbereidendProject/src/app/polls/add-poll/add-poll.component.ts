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

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent {
  isAanmaken: Boolean = false;
  isStemmen: Boolean = false;
  titelPollIsToegevoegd = false;
  antwoorden: string[] = []
status: string = "";
  vriendenPoll: Gebruiker[] = [];
 // mailadressenVrienden : string[] = [];
 // mailadres: string = "";
   antwoord: string = '';
   titelPoll: string = "";
   aantalAntwoordenIsOk: boolean = false; // Er moeten minsten twee antwoorden bij een poll zijn
   toonVrienden: boolean = false; // wanneer de naam en aantal antwoorden van de poll in orde zijn kan de gebruiker vrienden uitnodigen om te stemmen
   aantalVriendenIsOk: boolean = false; // Er moet minsten één vriend zijn die kan stemmen
   naam: string = "";
   gebruikersPoll: PollGebruiker[];
   antwoordenPoll : Antwoord[];
   nieuwePoll: Poll = new Poll(null, "",new Number(localStorage.getItem("gebruikerID")).valueOf(), this.antwoordenPoll, this.gebruikersPoll);




//   titelPollIsToegevoegd = false;
//   antwoorden: string[] = []
// status: string = "";
vrienden: Gebruiker[] = [];
 alleVrienden: Gebruiker[] = [];
//    antwoord: string = '';
//    titelPoll: string = "";
//    isOk: boolean = false;
//    naam: string = "";
//    gebruikersPoll: PollGebruiker[];
//    antwoordenPoll : Antwoord[];
  // nieuwePoll: Poll = new Poll(null, "",new Number(localStorage.getItem("gebruikerID")).valueOf(), this.antwoordenPoll, this.gebruikersPoll);
  nieuwePollForm = this.fb.group({
    naam: ['', Validators.required],
    lijstMogelijkeAntwoorden: [this.antwoordenPoll, Validators.required],
    lijstGebruikersPoll: [this.gebruikersPoll, Validators.required]

  });
   //isReadonly = false;
   iconNaamPoll: string = "done";
   faEdit = faEdit;
   faCheck = faCheck;
   faTrash = faTrash;
   faCheckCircle = faCheckCircle;
   faPlus = faPlus;
   faPlusCircle = faPlusCircle;
  
  // @ViewChild(AddEditFormComponent)
  // public addMemberForm: AddEditFormComponent;
  vriendenForm = this.fb.group({
    // selectListVrienden: [Gebruiker],
    vrienden: [Gebruiker],
    vriendenVoorPoll: [Gebruiker]
  });

  constructor(
    private fb: FormBuilder,
   // private httpService: HttpService,
    public dialogRef: MatDialogRef<AddPollComponent>,  // Used by the html component.
    private _vriendenService: VriendenService,
    private _messageService: MessagesService
    //public formErrorsService: FormErrorsService
  ) {
    this.getVrienden();
   }


  // reset() {
  //   this.addMemberForm.addEditMemberForm.reset();
  // }

  //  Processes form data and sends it to the server and db.

  public save(addMemberForm) {

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of whether it's touched.

    // if (this.addMemberForm.addEditMemberForm.valid) {

    // const enteredData = this.addMemberForm.addEditMemberForm.value;

    // this.httpService.addRecord(this.membersUrl, enteredData)
    //   .subscribe(
    //     res => {
    //       this.success();
    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log(err.error);
    //       console.log(err.message);
    //       this.handleError(err);
    //     }
    //   );
    // } else {
    //   this.addMemberForm.formErrors = this.formErrorsService.validateForm(
    //     this.addMemberForm.addEditMemberForm,
    //     this.addMemberForm.formErrors, false
    //   );
    // }
    // addMemberForm.addEditMemberForm.reset();
  }

  private success() {
    this._messageService.openDialog('Succes', 'De email is verzonden');
  }

  private handleError(error) {
    this._messageService.openDialog('Error', 'Er is iets mis gegaan, controleer uw internetconnectie aub.');
  }

  // addVriend(){
  //   var huidigeGebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
  //   this.nieuweVriendschap = new Vriendschap(0, 0, 0, huidigeGebruikerID, this.vriendForm.controls['email'].value);
  //   console.log(this.nieuweVriendschap);
  //   this._vriendenService.addVriendschap(this.nieuweVriendschap).subscribe(result => {
  //    console.log(result);
  //    console.log(result.statusCode);
  //    if(result.statusCode == 202){ // status 202 = "Your message is both valid, and queued to be delivered." --> dus wanneer dit OK is krijgt de gebruiker de succesmelding te zien
  //     this.success();
  //     this.vriendForm.controls['email'].setValue(""); // tekstveld terug leegmaken, zodat de gebruiker sneller een volgend emailadres kan ingeven
  //    }
    
  //  },
  //  (err: HttpErrorResponse) => {
  //    console.log(err.error);
  //    console.log(err.message);
  //    this.handleError(err);
  //  });
  // }

  addNaam(){
    //this.pollForm.controls.naam.setValue(this.titelPoll);
    this.nieuwePoll.naam = this.naam;
    this.titelPoll = this.naam;
    console.log(this.titelPoll);
   // console.log(this.nieuwePoll);
   // console.log(this.pollForm.controls.naam.value);
    this.titelPollIsToegevoegd = true;
    console.log(this.titelPoll);
    //this.toggleReadonly();
   // this.iconNaamPoll = 
  }

  addAntwoord(): void {
    this.antwoorden.push(this.antwoord);
    console.log(this.antwoorden);
    this.antwoord = "";
    if(this.antwoorden.length >= 2){
     // this.status = "oke";
     this.aantalAntwoordenIsOk = true;
    }
  }

  toonCardVrienden(){
    this.toonVrienden = true;
  }

  // addEmailVriend(): void {
  //   this.mailadressenVrienden.push(this.mailadres);
  //   console.log(this.mailadressenVrienden);
  //   this.mailadres = "";
  //   if(this.mailadressenVrienden.length >= 1){
  //    // this.status = "oke";
  //    this.aantalVriendenIsOk = true;
  //   }
  // }

  onSelectionChangeVriend(geselecteerdeVrienden: Gebruiker[]){
    this.vriendenPoll = geselecteerdeVrienden;
    console.log(this.vriendenPoll);
  }

  getVrienden(){
    this._vriendenService.getVriendenByGebruiker().subscribe(result => {
      console.log(result);
      this.alleVrienden = result;
    })
  }

  // toggleReadonly() {
  //   this.isReadonly = !this.isReadonly;
  // }

  onSubmit(){

  }

  // deleteVriend(vriend: string){
  //    const index: number =  this.mailadressenVrienden.indexOf(vriend);
  //   if (index !== -1) {
  //     this.mailadressenVrienden.splice(index, 1);
  //   }   
  //   console.log(this.mailadressenVrienden);     
   
  // }

 
    deleteAntwoord(antwoord: string){
    const index: number =  this.antwoorden.indexOf(antwoord);
   if (index !== -1) {
     this.antwoorden.splice(index, 1);
   }   
   console.log(this.antwoorden);     
  
 }
}
