import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenComponent } from './vrienden/vrienden.component';
import { AddVriendComponent } from './add-vriend/add-vriend.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VriendenComponent ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [VriendenComponent]
})
export class VriendenModule { }
