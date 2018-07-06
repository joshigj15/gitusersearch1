import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  
  private myId = "2dbea6d13ba6dcad07d0";
  private mySec = "482c4c7ba59968cb7b1f24782d490ea656c16505";
  private apiUrl="https://api.github.com/users";


  constructor( private http: HttpClient) {
  }


  getProfile() {
     return this.http.get(this.apiUrl+"/"+this.username+ "?client_id="+ this.myId+ "&client_secret=" + this.mySec);
  }
  getRepos() {
     return this.http.get(this.apiUrl+"/"+this.username+ "/repos"+ "?client_id="+ this.myId+ "&client_secret=" + this.mySec);
  }

  setUserName(username:string){
    this.username=username;
    return true;
  }
}
