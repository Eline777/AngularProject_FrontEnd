import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [],
  exports: []
})
export class HomeModule { }
