import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { SubReward } from '../model/sub-reward';
import { SubRewardDto } from '../model/dto/sub-reward-dto';

@Injectable()
export class SubRewardService {
  constructor(protected http: HttpService) {}

  private endPoint = `${environment.endpoint}`;

  public createSubReward(reward: SubReward, companyId: number ){

    return this.http.doPost<SubReward, any>(`${this.endPoint}/sub-rewards/companies/${companyId}`, reward, this.http.optsName('Create a new user'))
  
  } 

  public editSubReward(reward: SubReward, Id: number ){
    return this.http.doPut<SubReward, any>(`${this.endPoint}/sub-rewards/${Id}`, reward, this.http.optsName('Edit current user'))
  } 

  public deleteSubReward(Id: number ){
    return this.http.doDelete<void>(`${this.endPoint}/sub-rewards/${Id}`, this.http.optsName('Edit current user'))
  } 

  public getSubRewardsByCompany(companyId: number) {
    console.log('Getting users for company:', companyId);
    return this.http.doGet<SubRewardDto[]>(
      `${environment.endpoint}/sub-rewards/companies/${companyId}`,
      this.http.optsName('consultar usuarios por copmpay')
    );
  }

}
