import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenComponent } from './vrienden/vrienden.component';
import { AddVriendComponent } from './add-vriend/add-vriend.component';



@NgModule({
  declarations: [VriendenComponent, AddVriendComponent],
  imports: [
    CommonModule
  ],
  exports: [AddVriendComponent, VriendenComponent]
})
export class VriendenModule { }
