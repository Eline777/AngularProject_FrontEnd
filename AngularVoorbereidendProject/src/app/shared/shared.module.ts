import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatExpansionModule, MatListModule } from '@angular/material';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { ModuleWithProviders } from '@angular/core';
import { PollsService } from '../polls/polls.service';
import { AuthenticateService } from '../security/services/authenticate.service';
import { AppRoutingModule } from '../app-routing.module';
import { VriendenService } from '../vrienden/vrienden.service';

@NgModule({
  declarations: [NavigatieComponent],
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
    MatListModule
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
