import { Component,
			OnInit,
			OnDestroy } from '@angular/core';
import {	FormGroup,
			FormControl, 
			Validators, 
			FormArray} from '@angular/forms';
import { UsersService } from './../usersModule/services/users.service';
import { UserModel } from './../usersModule/models/user.model';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';	


@Component({
	selector: 'UserInfo',
	templateUrl: 'UserInfo.component.html',
   styleUrls: ['UserInfo.component.scss']

})

export class UserInfoComponent implements OnInit, OnDestroy{

	public userId!: number;
	private subscriptions: Subscription = new Subscription();
	public users!: UserModel[];
	public user!: UserModel;

	constructor(
		private activateRoute: ActivatedRoute,
		public usersService: UsersService,
	){}

	ngOnInit(){
		this.users = this.usersService.usersList;
 		this.subscriptions.add(this.activateRoute.params.subscribe(params=>this.userId=params['id']));
 		this.user = this.users[this.userId];
 	}


	ngOnDestroy(){
		 this.subscriptions.unsubscribe();
	}
}