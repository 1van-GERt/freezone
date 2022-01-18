import { Component } from '@angular/core';
import {	FormGroup,
			FormControl,
			Validators, } from '@angular/forms';
import {LoginApiService} from "../../services/loginApi.service";


@Component({
	selector: 'auth',
	templateUrl: 'auth.component.html',
   styleUrls: ['auth.component.scss']

})

export class AuthComponent {

	public isShowAuthErorMessage: boolean = false;

  constructor(private loginService: LoginApiService) {}

	authForm: FormGroup = new FormGroup({
		'login': new FormControl('', Validators.required),
		'password': new FormControl('', Validators.required)
	})

  login() {
    this.loginService.authUser(this.authForm.value).subscribe(value =>  
	    	{
	    		console.log('test',value)
	    		if(value == null){
	    			this.isShowAuthErorMessage = true;   		
	    		}
	    		else{
	    			this.isShowAuthErorMessage = false;

	    			document.cookie = `userId=${value.userId}`;
	    			document.cookie = "isAuth=true";
	    			document.cookie = `isAdmin=${value.isAdmin}`;
	    		}
	    	}
    	);
  }
}