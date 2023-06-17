import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reward } from '../model/reward';
import { RewardDto } from '../model/dto/reward-dto';

@Injectable()
export class RewardService {

  constructor(protected http: HttpService) {}

  private endPoint = `${environment.endpoint}`;

  public createReward(reward: Reward, companyId: number ){

    return this.http.doPost<Reward, any>(`${this.endPoint}/rewards/companies/${companyId}`, reward, this.http.optsName('Create a new user'))
  
  } 

  public createRewardWithSubRewards(reward: Reward, companyId: number, subRewardsIds: string){
    return this.http.doPostParameters<Reward, any>(`${this.endPoint}/rewards/companies/${companyId}/sub-rewards`, 
    reward,
    this.http.doGetParams({ subRewardsIds }),
    this.http.optsName('Create a new user'))
  
  } 

  public editReward(reward: Reward, Id: number ){
    return this.http.doPut<Reward, any>(`${this.endPoint}/rewards/${Id}`, reward, this.http.optsName('Edit current user'))
  } 

  public deleteReward(Id: number ){
    return this.http.doDelete<void>(`${this.endPoint}/rewards/${Id}`, this.http.optsName('Edit current user'))
  } 

  public getRewardsByCompany(companyId: number) {
    console.log('Getting users for company:', companyId);
    return this.http.doGet<RewardDto[]>(
      `${environment.endpoint}/rewards/companies/${companyId}`,
      this.http.optsName('consultar usuarios por copmpay')
    );
  }

}
