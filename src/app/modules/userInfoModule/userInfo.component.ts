import { Component,
			OnInit,
			AfterContentChecked,
			OnDestroy } from '@angular/core';
import {	FormGroup,
			FormControl,
			Validators,
			FormArray} from '@angular/forms';
import { UsersService } from './../usersModule/services/users.service';
import { UsersInfoService } from './services/userInfo.service';
import { UserModel } from './../usersModule/models/user.model';

import { ActivatedRoute } from '@angular/router';
import { Subscription,
			Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Router} from '@angular/router';

@Component({
	selector: 'UserInfo',
	templateUrl: 'UserInfo.component.html',
   styleUrls: ['UserInfo.component.scss']

})

export class UserInfoComponent implements OnInit, AfterContentChecked, OnDestroy{

	public userId!: number;
	private subscriptions: Subscription = new Subscription();
	public users!: UserModel[];
	public user!: UserModel;

	public isAdmin!: boolean;
	public observable = new Observable((observer) => {
			observer.next(document.cookie.replace(/(?:(?:^|.*;\s*)isAdmin\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
	})

	constructor(
		private activateRoute: ActivatedRoute,
		public usersService: UsersService,
		public usersInfoService: UsersInfoService,
  		private http: HttpClient,
  		private router: Router
	){}

	ngOnInit(){
		this.usersService.getUsersList().subscribe((value: UserModel[]) =>{
			this.users = value;
			this.getUser();
		});



 	};

	ngAfterContentChecked(){
		this.observable.subscribe(x => { this.isAdmin = (x == 'true') ? true : false});
		console.log('isAdmin',this.isAdmin)
	}


 	getUser(){
 			this.subscriptions.add(this.activateRoute.params.subscribe(params => {
				this.userId=params['id'];
				let result = this.users.find(user => user.userId === this.userId) as UserModel;
	 			this.user = result;
	 		}));
 	}

 	delUser(){
		this.usersInfoService.delUser(this.user).subscribe(value => {console.log(value)}
		);
		this.router.navigate(['users']);
 	}







	ngOnDestroy(){
		 this.subscriptions.unsubscribe();
	}


}
