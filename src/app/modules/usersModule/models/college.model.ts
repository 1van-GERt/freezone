export class CollegeModel{
	public collegeName!: string;
	public collegeSpeciality!: string;
	public collegeEntrance!: number;
	public collegeGraduation!: number;
	constructor(
			collegeName: string,
			collegeSpeciality: string,
			collegeEntrance: number,
			collegeGraduation: number,
		){
			this.collegeName = collegeName;
			this.collegeSpeciality = collegeSpeciality;
			this.collegeEntrance = collegeEntrance;
			this.collegeGraduation = collegeGraduation;
	}
}