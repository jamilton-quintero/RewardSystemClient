import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RewardToEditServiceService {

  private rewardSource = new BehaviorSubject(null);
  currentReward = this.rewardSource.asObservable();

  constructor() { }

  changeReward(reward: any) {
    this.rewardSource.next(reward);
  }
}
