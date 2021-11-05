import { UserModel } from './models/user.model';

export const UsersArray: UserModel[] =
[
  {
		nickName: "GERt",
		userId: 0,
		firstName: "Иван",
		userType: true,
		userStatus: true,
		lastName: "Петухов",
		age: 29,
		colleges:[
			{
				collegeName:'БГУИР',
		   	collegeSpeciality:"КИС",
			   collegeEntrance: 2010,
			   collegeGraduation: 2015
			},
		],
  },
  {
		nickName: "qwerty",
		userId: 1,
		firstName: "Олег",
		userType: false,
		userStatus: false,
		lastName: "Дятлов",
		age: 33,
		colleges:[
			{
				collegeName:'БГУИР',
		   	collegeSpeciality:"КИС",
			   collegeEntrance: 2010,
			   collegeGraduation: 2015
			},
			{
				collegeName:'БГУ',
		   	collegeSpeciality:"КрИС",
			   collegeEntrance: 205,
			   collegeGraduation: 2010
			},
		],
  },
];
