import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatExpansionModule, MatListModule, MatOptionModule } from '@angular/material';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { ModuleWithProviders } from '@angular/core';
import { PollsService } from '../polls/polls.service';
import { AuthenticateService } from '../security/services/authenticate.service';
import { AppRoutingModule } from '../app-routing.module';
import { VriendenService } from '../vrienden/vrienden.service';
import { MessageComponent } from './message-service/message/message.component';
//import { DialogComponent } from './dialog/dialog/dialog.component';
//import { DialogService } from './dialog/dialog.service';
//import { VriendenModule } from '../vrienden/vrienden.module';

@NgModule({
  declarations: [NavigatieComponent, MessageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatOptionModule,
    AppRoutingModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    NavigatieComponent,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatOptionModule,
    // DialogComponent,
    // DialogService,
   // VriendenModule

  ],
  providers: [GebruikerService, PollsService, AuthenticateService, VriendenService]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [GebruikerService, PollsService, AuthenticateService, VriendenService]
    }
  }
}
