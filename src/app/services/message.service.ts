import { Injectable } from '@angular/core';
import { IMessage } from '../models/IMessage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  API_URL: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http: HttpClient
  ) {}

  getMessageById(id: number){
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  getMessages(){
    return this.http.get<any>(`${this.API_URL}`);
  }

  storeMessage(message: IMessage){
    return this.http.post<any>(`${this.API_URL}`, message);
  }
  
  updateMessage(id: number, message: IMessage){
    return this.http.put<any>(`${this.API_URL}/${id}`, message);
  }

  deleteMessage(id: number){
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
