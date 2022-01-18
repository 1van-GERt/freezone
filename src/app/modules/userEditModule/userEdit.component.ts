import { Component,
			OnInit,
			AfterContentInit,
			OnDestroy } from '@angular/core';
import {	FormGroup,
			FormControl,
			Validators,
			FormArray} from '@angular/forms';
import { UsersService } from '../usersModule/services/users.service';
import { UserEditService } from './services/userEdit.service';
import { UserModel } from '../usersModule/models/user.model';
import { CollegeModel } from '../usersModule/models/college.model'


import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';


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
	public firstName!: string;
	public lastName!: string;
	public age!: number;



	public colleges: CollegeModel[] = [];

	public userEditForm!: FormGroup;


	public testForm!: FormGroup;
	public testKey!: string;


	constructor(
		private activateRoute: ActivatedRoute,
		public usersService: UsersService,
		public userEditService: UserEditService,
		public router: Router,
	){}


	ngOnInit(){
		this.testKey = this.userEditService.testKey;
/*		this.users = this.usersService.usersList;
 		this.subscriptions.add(this.activateRoute.params.subscribe(params=>this.userId=params['id']));
 		this.user = this.users[this.userId];*/

		this.usersService.getUsersList().subscribe((value: UserModel[]) =>{
			this.users = value;	

 			this.subscriptions.add(this.activateRoute.params.subscribe(params => {
				this.userId = params['id'];
				this.user = this.users.find(user => user.userId === this.userId) as UserModel;

	 			console.log(this.user)

			this.userEditForm = new FormGroup({
				'nickName': new FormControl(this.user.nickName,  Validators.required),
				'userType': new FormControl(this.user.isAdmin,  Validators.required),
				'firstName': new FormControl(this.user.firstName,  Validators.required),
				'lastName': new FormControl(this.user.lastName,  Validators.required),
				'age': new FormControl(this.user.age,  Validators.required),
				'collegeArray': new FormArray([])
			});
			this.collegeArrayPush()

	 		}));
		});
		console.log('2',this.user)


	}

	ngDoCheck(){}

	ngAfterContentInit(){}


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
		console.log('userEditForm:', this.userEditForm.value, 'id:', this.userId)

				this.userEditService.editUser(this.userEditForm.value, this.userId).subscribe(value => {console.log('saveUserEdit',value)}		
		);
		this.router.navigate(['users']);
		this.usersService.getUsersList();
	}

	ngOnDestroy(){
		 this.subscriptions.unsubscribe();

	}
}
