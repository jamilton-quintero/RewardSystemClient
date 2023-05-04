export class UserDto {

    id:number;
    firstName: string;  
    lastName: string;
    email: string;
    identification: string;
    totalPoints:number;

    constructor(
    id:number,
    firstName: string, 
    lastName: string,
    email: string,
    identification: string,
    totalPoints:number,
    ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.identification = identification;
        this.totalPoints = totalPoints;
    }

}
