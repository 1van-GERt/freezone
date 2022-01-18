import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { UserModel } from './../../usersModule/models/user.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserCreateService{

	public usersList!: UserModel[];
	public user!: UserModel;
	public userId: number = 2;



	constructor(private http: HttpClient) {}


ngOnInit(){

	}


	postUser(userCreateForm: object): Observable<any> {
 		return this.http.post(`${environment.url}/users/postAddUser`,  { userCreateForm: userCreateForm});

	}



}
