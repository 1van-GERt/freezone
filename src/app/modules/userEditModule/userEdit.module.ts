import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserEditComponent } from './userEdit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   RouterModule,
				   ReactiveFormsModule],
   declarations: [ UserEditComponent],
   exports: [ UserEditComponent] 

})

export class UserEditModule { }