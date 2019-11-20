import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './home.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [HomeService],
  exports: []
})
export class HomeModule { }
