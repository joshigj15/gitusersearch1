import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../view-profile/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private userService:UsersService, 
    private router:Router,
    private profileService:ProfileService) { 
    
  }
  userList:any;
  userName:any

  ngOnInit() {
  }

  searchProfile(form:NgForm) {
    console.log("Search data For:",form.value.userName);
    this.userService.getAllUsers(form.value.userName).subscribe(data => {
      if(data.total_count==0){
        alert("No Data Found");
      }
      else {
        this.userList = data.items;
        console.log(this.userList);
      }
    })
  }

  getUser(targetUser:string) {
    console.log(targetUser);
    var a=this.profileService.setUserName(targetUser);
     if(a==true)
     {
        this.router.navigate(['viewProfile']);
     }
  }
}
