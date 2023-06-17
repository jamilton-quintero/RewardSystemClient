import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reward } from '@company/shared/model/reward';
import { RewardService } from '@company/shared/service/reward.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-reward-to-user',
  templateUrl: './add-reward-to-user.component.html',
  styleUrls: ['./add-reward-to-user.component.scss']
})
export class AddRewardToUserComponent implements OnInit {

  @Input() visibleAddReward: boolean;
  @Output() rewardAdded = new EventEmitter<boolean>();

  public subRewards: Observable<Reward[]>;

  sourceReward: Reward[];
  targetReward: Reward[] = [];;
  events: any[];

  constructor(
    protected rewardService: RewardService) { }

  ngOnInit(): void {
    this.events = [];
    this.rewardService.getRewardsByCompany(1).subscribe({
      next: (queryParams: Reward[]) => {
        
       this.sourceReward = queryParams;
      },
      error: (err: any) => {
        console.log(err);
      },
    }
    );
  }

  updateEvents(): void {
    const lineTargetProducts = this.targetReward;
    lineTargetProducts.sort((a, b) => a.pointsToRedeem - b.pointsToRedeem);
    this.events = null;
    this.events = lineTargetProducts.map(product => product.name);
  }

}

