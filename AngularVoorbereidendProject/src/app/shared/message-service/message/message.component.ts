import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {  
    public title: string;
    public message: string;
  
    constructor(
      private dialogRef: MatDialogRef<MessageComponent>,
    ) { }
  
    private closeWithTimer() {
      setTimeout (() => {
        this.dialogRef.close();
      }, 4000);
    }
  
    ngOnInit() {
      this.closeWithTimer();
    }
  }
  
