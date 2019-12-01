import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Vriendschap } from '../models/vriendschap.model';
import { VriendenService } from '../vrienden.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/shared/message-service/message.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-add-vriend',
  templateUrl: './add-vriend.component.html',
  styleUrls: ['./add-vriend.component.scss']
})
export class AddVriendComponent  {
  emailVriend: string = "";
  nieuweVriendschap: Vriendschap = null;
  // @ViewChild(AddEditFormComponent)
  // public addMemberForm: AddEditFormComponent;
  vriendForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
   // private httpService: HttpService,
    public dialogRef: MatDialogRef<AddVriendComponent>,  // Used by the html component.
    private _vriendenService: VriendenService,
    private _messageService: MessagesService
    //private _dialogService: DialogService,
    //public formErrorsService: FormErrorsService
  ) { }


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

  addVriend(){
    var huidigeGebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    this.nieuweVriendschap = new Vriendschap(0, 0, 0, huidigeGebruikerID, this.vriendForm.controls['email'].value);
    console.log(this.nieuweVriendschap);
    this._vriendenService.addVriendschap(this.nieuweVriendschap).subscribe(result => {
     console.log(result);
     console.log(result.statusCode);
     if(result.statusCode == 202){ // status 202 = "Your message is both valid, and queued to be delivered." --> dus wanneer dit OK is krijgt de gebruiker de succesmelding te zien
      this.success();
      this.vriendForm.controls['email'].setValue(""); // tekstveld terug leegmaken, zodat de gebruiker sneller een volgend emailadres kan ingeven
     }
    
   },
   (err: HttpErrorResponse) => {
     console.log(err.error);
     console.log(err.message);
     this.handleError(err);
   });
  }
}
