import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { ModuleWithProviders } from '@angular/core';
import { PollsService } from '../polls/polls.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthenticateService } from '../security/services/authenticate.service';


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
    AngularFontAwesomeModule
   
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
    AngularFontAwesomeModule
  ],
  providers: [GebruikerService, PollsService, AuthenticateService]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [GebruikerService, PollsService, AuthenticateService]
    }
  }
}
