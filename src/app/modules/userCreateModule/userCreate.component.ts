import { Component,
			OnInit } from '@angular/core';
import { UserModel } from './../usersModule/models/user.model';
import {	FormGroup,
			FormControl,
			Validators,
			FormArray} from '@angular/forms';
import { UserCreateService } from './services/userCreate.service';

import {Router} from '@angular/router';


@Component({
	selector: 'usersCreate',
	templateUrl: 'userCreate.component.html',
   styleUrls: ['userCreate.component.scss']

})

export class UserCreateComponent implements OnInit {

	ngOnInit(){

	}
	public test: number = 22;
	constructor(
		public userCreateService: UserCreateService,
		public router: Router,
	){};

	userCreateForm: FormGroup = new FormGroup({
		'nickName': new FormControl('',  Validators.required),
		'password': new FormControl('',  Validators.required),
		'userType': new FormControl(false,  Validators.required),
		'firstName': new FormControl('',  Validators.required),
		'lastName': new FormControl('',  Validators.required),
		'age': new FormControl('',  Validators.required),
		'collegeArray': new FormArray([
			new FormGroup({
					'collegeName': new FormControl('',  Validators.required),
					'collegeSpeciality': new FormControl('',  Validators.required),
					'collegeEntrance': new FormControl('',  Validators.required),
					'collegeGraduation': new FormControl('',  Validators.required),
				} , Validators.required),
		]),
	});


	addCollege(){
		console.log('UserCreateComponent');
		 (<FormArray>this.userCreateForm.controls["collegeArray"])
		 .push(new FormGroup({
					'collegeName': new FormControl('',  Validators.required),
					'collegeSpeciality': new FormControl('',  Validators.required),
					'collegeEntrance': new FormControl('',  Validators.required),
					'collegeGraduation': new FormControl('',  Validators.required),
				}),);
	};

	removeCollege(n:number){
		 (<FormArray>this.userCreateForm.controls["collegeArray"]).removeAt(n);
	}

	saveUser(){
		console.log(this.userCreateForm.value )
		this.userCreateService.postUser(this.userCreateForm.value).subscribe(value => {console.log('addUer',value)})	

	}
}
