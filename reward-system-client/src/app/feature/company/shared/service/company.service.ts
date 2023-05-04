import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';
import { User } from '../model/user';
import { UserDto } from '../model/dto/user-dto';

@Injectable()
export class CompanyService {

  constructor(protected http: HttpService) {}

  private endPoint = `${environment.endpoint}`;
  
  public createCompany(company: Company){
    return this.http.doPost<Company, any>(`${this.endPoint}/companies`, company, this.http.optsName('Create a new company'))
  } 

  public createUser(user: User, companyId: number ){

    return this.http.doPost<User, any>(`${this.endPoint}/users/companies/${companyId}`, user, this.http.optsName('Create a new user'))
  } 

  public getusersByCompany(companyId: number) {
    console.log('Getting users for company:', companyId);
    return this.http.doGet<UserDto[]>(
      `${environment.endpoint}/users/companies/${companyId}`,
      this.http.optsName('consultar usuarios por copmpay')
    );
  }

}
