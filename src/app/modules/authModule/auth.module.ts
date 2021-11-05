import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   ReactiveFormsModule],
   declarations: [ AuthComponent],
   exports: [ AuthComponent] 

})

export class AuthModule { }