import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { UserModel } from '../models/user.model';
import { UsersArray } from '../usersList'

@Injectable({
    providedIn: 'root'
})

export class UsersService{

	public usersList: UserModel[] = UsersArray;
	public user!: UserModel;
	public userId: number = 2;


	addUser(userCreateForm: FormGroup){
		console.log('UsersService', this.userId)
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
		console.log(userEditForm.value)
		this.usersList[userId].nickName = userEditForm.value.nickName;
		this.usersList[userId].isAdmin = userEditForm.value.isAdmin;
		this.usersList[userId].firstName = userEditForm.value.ferstName;
		this.usersList[userId].lastName = userEditForm.value.lastName;
		this.usersList[userId].age = userEditForm.value.age;
		this.usersList[userId].colleges = userEditForm.value.collegeArray;
	}
}
