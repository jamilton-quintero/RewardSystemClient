import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';
@Injectable()
export class CompanyService {

  constructor(protected http: HttpService) {}

  private endPoint = `${environment.endpoint}`;
  
  public createCompany(company: Company){
    return this.http.doPost<Company, any>(`${this.endPoint}/companies`, company, this.http.optsName('Create a new company'))
  } 

}
