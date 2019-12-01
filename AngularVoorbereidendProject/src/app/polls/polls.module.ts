import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPollComponent } from './add-poll/add-poll.component';




@NgModule({
  declarations: [PollsComponent, AddPollComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PollsModule { }
