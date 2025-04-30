import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserSignupLoginComponent } from './components/user-signup-login/user-signup-login.component';
import { UserComplaintComponent } from './components/user-complaint/user-complaint.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { AdminSignupLoginComponent } from './components/admin-signup-login/admin-signup-login.component';
import { AdminComplaintManagementComponent } from './components/admin-complaint-management/admin-complaint-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupLoginComponent,
    UserComplaintComponent,
    InstructionComponent,
    AdminSignupLoginComponent,
    AdminComplaintManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
