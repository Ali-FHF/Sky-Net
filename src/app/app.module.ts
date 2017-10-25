import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

import { FHFUserComponent } from './fhfuser.component';

import { UserService } from './user.service';
import { FHFUserService } from './fhfuser.service';

import { LoanService } from './loan.service'; 

import { EditRecordComponent } from './editrecord.component';
import { LoanDetailComponent } from './loan-detail.component';
// import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    AppComponent,UserComponent,FHFUserComponent,EditRecordComponent,LoanDetailComponent],
  imports: [
   BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService,LoanService,FHFUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
