import { Component,
			OnInit } from '@angular/core';
import { UsersService } from './services/users.service'
import { UserModel } from './models/user.model';
import { UsersArray } from './usersList';
import { Observable } from 'rxjs';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
   styleUrls: ['users.component.scss']

})

export class UsersComponent implements OnInit {
	public users!: UserModel[];
	public isAdmin!: boolean;
	public observable = new Observable((observer) => {
			observer.next(document.cookie.replace(/(?:(?:^|.*;\s*)isAdmin\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
	})

	constructor(
		public usersService: UsersService,
	){}

	ngOnInit(){
				this.usersService.getUsersList().subscribe((value: UserModel[]) =>{
			this.users = value;
		});
	}

	ngAfterContentChecked(){
		this.observable.subscribe(x => { this.isAdmin = (x == 'true') ? true : false});
	}

}
