import { Injectable } from '@angular/core';
import { UserModel } from '../../usersModule/models/user.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsersInfoService{
	constructor(private http: HttpClient) {}

	delUser(user: UserModel){
 		return this.http.delete(`${environment.url}/users/deleteDelUser`, {params: { userId: user.userId }});
 	}


 		
}