import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {

  public SelectedProfile:any;
  public myRepositories:any;
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.getProfileData();
      this.getRepositories();
  }

    getProfileData() {
    this.profileService.getProfile().subscribe(profile =>{
      console.log(profile)
      this.SelectedProfile=profile;
    });
  }

  getRepositories() {
    this.profileService.getRepos().subscribe(repos =>{
      console.log(repos)
      this.myRepositories=repos;
    });
  }
}
