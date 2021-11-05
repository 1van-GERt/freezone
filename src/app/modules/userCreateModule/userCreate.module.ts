import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserCreateComponent } from './userCreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   ReactiveFormsModule],
   declarations: [ UserCreateComponent],
   exports: [ UserCreateComponent] 

})

export class UserCreateModule { }