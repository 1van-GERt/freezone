import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users.component'
import { RouterModule } from '@angular/router';


@NgModule({
   imports: [  BrowserModule, 
				   RouterModule],
   declarations: [ UsersComponent],
   exports: [ UsersComponent] 

})

export class UsersModule { }