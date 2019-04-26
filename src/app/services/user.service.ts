import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private http: HttpClient
  ) {}

  getUser(id: number){
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
}
