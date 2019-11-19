import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InloggenRegistrerenComponent } from './inloggen-registreren/inloggen-registreren.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [InloggenRegistrerenComponent],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [InloggenRegistrerenComponent]
})
export class InloggenRegistrerenModule { }
