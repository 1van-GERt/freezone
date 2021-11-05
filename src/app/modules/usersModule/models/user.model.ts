import { CollegeModel } from './college.model'

export class UserModel{
	public userId!: number;
	public nickName!:string;
	public isAdmin: boolean = false;
	public isOnline: boolean = false;
	public firstName!: string;
	public lastName!: string;
	public age!: number;
	public colleges: CollegeModel[] = [];


	constructor(
			userId: number,
			nickName:string,
			userType: boolean,
			userStatus: boolean,
			firstName: string,
			lastName: string,
			age: number,
			colleges: any
		){
			this.userId = userId;
			this.nickName = nickName;
			this.isAdmin = userType;
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.colleges = colleges;
	}
}
