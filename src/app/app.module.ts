import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFaucultyComponent } from './add-fauculty/add-fauculty.component';
import { ViewAllStudentComponent } from './view-all-student/view-all-student.component';
import { ViewAllFaucultyComponent } from './view-all-fauculty/view-all-fauculty.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"student",component:AddStudentComponent
  },
  {
    path:"fauculty",component:AddFaucultyComponent
  },
  {
    path:"viewa",component:ViewAllStudentComponent
  },
  {
    path:"viewf",component:ViewAllFaucultyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    DashboardComponent,
    AddStudentComponent,
    AddFaucultyComponent,
    ViewAllStudentComponent,
    ViewAllFaucultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
