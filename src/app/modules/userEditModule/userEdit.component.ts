import { Component,
			OnInit,
			AfterContentInit,
			OnDestroy } from '@angular/core';
import {	FormGroup,
			FormControl, 
			Validators, 
			FormArray} from '@angular/forms';
import { UsersService } from './../usersModule/services/users.service';
import { UserModel } from './../usersModule/models/user.model';
import { CollegeModel } from './../usersModule/models/college.model'


import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';			


@Component({
	selector: 'UserEdit',
	templateUrl: 'UserEdit.component.html',
   styleUrls: ['UserEdit.component.scss']

})

export class UserEditComponent implements  OnInit, AfterContentInit, OnDestroy{

	public userId!: number;
	private subscriptions: Subscription = new Subscription();
	public users!: UserModel[];
	public user!: UserModel;
	public nickName!:string;
	public userType: boolean = false;
	public userStatus: boolean = false;
	public ferstName!: string;
	public lastName!: string;
	public age!: number;
/*	public collegeName!: string;
	public collegeSpeciality!: string;
	public collegeEntrance!: number;
	public collegeGraduation!: number;*/

	public colleges: CollegeModel[] = [];	

	public userEditForm!: FormGroup;

	constructor(
		private activateRoute: ActivatedRoute,
		public usersService: UsersService,
	){}



	ngOnInit(){
		this.users = this.usersService.usersList;
 		this.subscriptions.add(this.activateRoute.params.subscribe(params=>this.userId=params['id']));

 		this.user = this.users[this.userId];
 		
	}

	ngAfterContentInit(){
		this.userEditForm = new FormGroup({
			'nickName': new FormControl(this.user.nickName,  Validators.required),
			'userType': new FormControl(this.user.userType,  Validators.required),
			'ferstName': new FormControl(this.user.ferstName,  Validators.required),
			'lastName': new FormControl(this.user.lastName,  Validators.required),
			'age': new FormControl(this.user.age,  Validators.required),
			'collegeArray': new FormArray([])
		});		
		this.collegeArrayPush()
	}



	collegeArrayPush(){
		this.user.colleges.forEach(e => (<FormArray>this.userEditForm.controls["collegeArray"])
		   .push(new FormGroup({

				'collegeName': new FormControl(e.collegeName,  Validators.required),
				'collegeSpeciality': new FormControl(2,  Validators.required),	
				'collegeEntrance': new FormControl(e.collegeEntrance,  Validators.required),
				'collegeGraduation': new FormControl(e.collegeGraduation,  Validators.required),
				}),))	

	}	

	addCollege(){
		 (<FormArray>this.userEditForm.controls["collegeArray"])
		 .push(new FormGroup({
					'collegeName': new FormControl('',  Validators.required),
					'collegeSpeciality': new FormControl('',  Validators.required),	
					'collegeEntrance': new FormControl('',  Validators.required),
					'collegeGraduation': new FormControl('',  Validators.required),
				}),);
	}

	removeCollege(n:number){
		 (<FormArray>this.userEditForm.controls["collegeArray"]).removeAt(n);
	}

	saveUserEdit(){
		this.usersService.saveUserEdit(this.user.userId, this.userEditForm);
	}

	ngOnDestroy(){
		 this.subscriptions.unsubscribe();

	}
}