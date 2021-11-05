import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './userInfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   ReactiveFormsModule,
				   RouterModule],
   declarations: [ UserInfoComponent],
   exports: [ UserInfoComponent] 

})

export class UserInfoModule { }