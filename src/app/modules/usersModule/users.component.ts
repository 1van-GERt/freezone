import { Component,
			OnInit } from '@angular/core';
import { UsersService } from './services/users.service'
import { UserModel } from './models/user.model';
import { UsersArray } from './usersList';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
   styleUrls: ['users.component.scss']

})

export class UsersComponent implements OnInit {
	public users!: UserModel[];

	constructor(
		public usersService: UsersService,
	){}

	ngOnInit(){
		this.users = this.usersService.usersList;
	}

}