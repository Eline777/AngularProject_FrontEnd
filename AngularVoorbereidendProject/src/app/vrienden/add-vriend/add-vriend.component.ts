import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Vriendschap } from '../models/vriendschap.model';
import { VriendenService } from '../vrienden.service';
import { FormBuilder, Validators } from '@angular/forms';
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


  private membersUrl = 'api/members';
  private dbTable = 'members';

  constructor(
    private fb: FormBuilder,
   // private httpService: HttpService,
    public dialogRef: MatDialogRef<AddVriendComponent>,  // Used by the html component.
    private _vriendenService: VriendenService
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
  //  this.messageService.openDialog('Success', 'Database updated as you wished!');
  }

  private handleError(error) {
    //this.messagesService.openDialog('Error addm1', 'Please check your Internet connection.');
  }

  addVriend(){
    var huidigeGebruikerID = new Number(localStorage.getItem("gebruikerID")).valueOf();
    this.nieuweVriendschap = new Vriendschap(null, null, 0, huidigeGebruikerID, this.vriendForm.controls['email'].value);
    console.log(this.nieuweVriendschap);
    //this._vriendenService.addVriendschap(this.nieuweVriendschap).subscribe(result => {
    //  console.log(result);
   // });
  }
}
