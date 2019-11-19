import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { NavigatieComponent } from './navigatie/navigatie.component';



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
    FormsModule
   
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    NavigatieComponent
  ]
})
export class SharedModule { }
