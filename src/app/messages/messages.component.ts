import { Component, OnInit } from '@angular/core';
import { IMessage } from '../models/IMessage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //messages: Array<IMessage>;
  messages: any;
  message: any;
  showSpinner: boolean = true;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages(){
    this.showSpinner = true;
    this.messageService.getMessages().subscribe(result => {
      if(result.length > 0){
        this.messages = result;
        this.showSpinner = false;
      }
    });
  }

  showMessage(id: number){
    this.showSpinner = true;
    this.messageService.getMessageById(id).subscribe(result => {
        this.message = result;
        this.showSpinner = false;
    });
  }

  deleteMessage(id: number){
    this.showSpinner = true;
    this.messageService.deleteMessage(id).subscribe(result => {
      this.messages = this.messages.filter(item => {
        return item.id != id;
      })
      this.message = null;
      this.showSpinner = false;
    });
  }
}
