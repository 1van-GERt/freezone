import { Injectable } from '@angular/core';
import { UserModel } from '../../usersModule/models/user.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import {	FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class UserEditService{

	constructor(private http: HttpClient) {}

	public testKey: string = 'testValue';

 	editUser(userEditForm: object, userId: number){
 		console.log('UserEditService', userEditForm)
 		return this.http.patch(`${environment.url}/users/putEditUser`, {params: { userId: userId, userEditForm: userEditForm}});
 	}

}