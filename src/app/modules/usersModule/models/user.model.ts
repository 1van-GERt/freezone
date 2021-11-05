import { CollegeModel } from './college.model'

export class UserModel{
	public userId!: number;
	public nickName!:string;
	public userType: boolean = false;
	public userStatus: boolean = false;
	public ferstName!: string;
	public lastName!: string;
	public age!: number;
/*	public collegeName!: string;
	public collegeSpeciality!: string;
	public collegeEntrance!: number;
	public collegeGraduation!: number;*/

	public colleges: CollegeModel[] = [];
	

	constructor(
			userId: number,
			nickName:string,			
			userType: boolean,
			userStatus: boolean,
			ferstName: string,
			lastName: string,
			age: number,
			colleges: any,
/*			collegeName: string,
			collegeSpeciality: string,
			collegeEntrance: number,
			collegeGraduation: number,*/
		){
			this.userId = userId;
			this.nickName = nickName;
			this.userType = userType;
			this.ferstName = ferstName;
			this.lastName = lastName;
			this.age = age;
			this.colleges = colleges;

	}
}