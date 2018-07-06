import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfileService } from './view-profile/profile.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersService } from './dashboard/users.service';


const routes : Routes = [
{ path:'', redirectTo:'dashboard',pathMatch:'full'},
{ path:'viewProfile', component: ViewProfileComponent},
{ path:'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService,UsersService],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})
export class AppModule { }
