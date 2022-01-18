import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { UserModel } from '../models/user.model';
import { UsersArray } from '../usersList';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsersService{

	public usersList!: UserModel[];
	public user!: UserModel;
	public userId: number = 2;



	constructor(private http: HttpClient) {}


ngOnInit(){

	}	

	addUser(userCreateForm: FormGroup){
		this.usersList.push(new UserModel(
			this.userId,
			userCreateForm.value.nickName,
			userCreateForm.value.userType ,
			false,
			userCreateForm.value.ferstName ,
			userCreateForm.value.lastName ,
			userCreateForm.value.age,
			userCreateForm.value.collegeArray
		))
		this.userId++;

	}

	saveUserEdit(userId:number, userEditForm:FormGroup){
		this.usersList[userId].nickName = userEditForm.value.nickName;
		this.usersList[userId].isAdmin = userEditForm.value.isAdmin;
		this.usersList[userId].firstName = userEditForm.value.ferstName;
		this.usersList[userId].lastName = userEditForm.value.lastName;
		this.usersList[userId].age = userEditForm.value.age;
		this.usersList[userId].colleges = userEditForm.value.collegeArray;
	}

	getUsersList(): Observable<any> {
		return this.http.get(`${environment.url}/users/getUsersList`);

	}



}
