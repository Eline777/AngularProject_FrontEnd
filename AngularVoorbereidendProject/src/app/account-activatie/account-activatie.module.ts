import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivatieComponent } from './account-activatie/account-activatie.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AccountActivatieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountActivatieComponent
  ]
})
export class AccountActivatieModule { }
