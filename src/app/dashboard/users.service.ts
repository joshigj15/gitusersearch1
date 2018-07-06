import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor( private http:HttpClient) { }
  private apiUrl="https://api.github.com/search/users";

  getAllUsers(searchName:string) :Observable<User>{
    return this.http.get<User>(this.apiUrl+ "?q="+JSON.stringify(searchName));
  }
}
