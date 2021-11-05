import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   ReactiveFormsModule,
				   MatFormFieldModule,
				   MatInputModule,
				   MatButtonModule],
   declarations: [ AuthComponent],
   exports: [ AuthComponent] 

})

export class AuthModule { }