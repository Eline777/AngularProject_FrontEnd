import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Vriendschap } from '../models/vriendschap.model';
import { VriendenService } from '../vrienden.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/shared/message-service/message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-vriend',
  templateUrl: './add-vriend.component.html',
  styleUrls: ['./add-vriend.component.scss']
})
export class AddVriendComponent {
  emailVriend: string = "";
  nieuweVriendschap: Vriendschap = null;
  vriendForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddVriendComponent>,  // Used by the html component.
    private _vriendenService: VriendenService,
    private _messageService: MessagesService
  ) { }

  private success() {
    this._messageService.openDialog('Succes', 'De email is verzonden');
  }

  private handleError(error) {
    this._messageService.openDialog('Error', 'Er is iets mis gegaan, controleer uw internetconnectie aub.');
  }

  addVriend() {
    var huidigeGebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    this.nieuweVriendschap = new Vriendschap(0, 0, 0, huidigeGebruikerID, this.vriendForm.controls['email'].value);
    console.log(this.nieuweVriendschap);
    this._vriendenService.addVriendschap(this.nieuweVriendschap).subscribe(result => {
      console.log(result);
      console.log(result.statusCode);
      if (result.statusCode == 202) { // status 202 = "Your message is both valid, and queued to be delivered." --> dus wanneer dit OK is krijgt de gebruiker de succesmelding te zien
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
