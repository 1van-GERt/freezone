import { Component } from '@angular/core';
import {	FormGroup,
			FormControl,
			Validators } from '@angular/forms';


@Component({
	selector: 'auth',
	templateUrl: 'auth.component.html',
   styleUrls: ['auth.component.scss']

})

export class AuthComponent {
	

	authForm: FormGroup = new FormGroup({
		'login': new FormControl('', Validators.required),
		'password': new FormControl('', Validators.required)
	})


}