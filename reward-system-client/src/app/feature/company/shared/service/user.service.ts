import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { UserDto } from '../model/dto/user-dto';

@Injectable()
export class UserService {


  constructor(protected http: HttpService) {}

  private endPoint = `${environment.endpoint}`;

  public createUser(user: User, companyId: number ){

    return this.http.doPost<User, any>(`${this.endPoint}/users/companies/${companyId}`, user, this.http.optsName('Create a new user'))
  
  } 

  public editUser(user: User, Id: number ){
    return this.http.doPut<User, any>(`${this.endPoint}/users/${Id}`, user, this.http.optsName('Edit current user'))
  } 

  public deleteUser(Id: number ){
    return this.http.doDelete<void>(`${this.endPoint}/users/${Id}`, this.http.optsName('Edit current user'))
  } 


  public getUsersByCompany(companyId: number) {
    console.log('Getting users for company:', companyId);
    return this.http.doGet<UserDto[]>(
      `${environment.endpoint}/users/companies/${companyId}`,
      this.http.optsName('consultar usuarios por copmpay')
    );
  }

}
