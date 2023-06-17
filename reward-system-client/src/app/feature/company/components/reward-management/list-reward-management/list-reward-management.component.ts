import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RewardDto } from '@company/shared/model/dto/reward-dto';
import { RewardToEditServiceService } from '@company/shared/service/reward-to-edit-service.service';
import { RewardService } from '@company/shared/service/reward.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-reward-management',
  templateUrl: './list-reward-management.component.html',
  styleUrls: ['./list-reward-management.component.scss']
})
export class ListRewardManagementComponent {
  
  @Input() isRewardcreated:boolean;
  @Output() rewardToEdit = new EventEmitter<RewardDto>();
  showDialogEdit: boolean;
  //rewardToEdit : RewardDto;

  public rewards: Observable<RewardDto[]>;

  constructor(
    protected rewardService: RewardService,
    protected rewardToEditServiceService: RewardToEditServiceService) { }

  ngOnInit(): void {
    this.refreshRewards();
  }

  refreshRewards(): void {
     this.rewardService.getRewardsByCompany(1).subscribe(response => {
      console.log(response);
      this.rewards = of(response);
      console.log(this.rewards);
    });
  }

  rewardEdited(isRewardEdited: boolean): void {
    if (isRewardEdited) {
      this.showDialogEdit = false;
      this.refreshRewards();
    }
  }

  rewardDeleted(isRewardDeleted: boolean): void {
    if (isRewardDeleted) {
      this.refreshRewards();
    }
  }

  onEditReward(reward:RewardDto) {
    //this.rewardToEdit = reward;
    //this.showDialogEdit = true;
    //.rewardToEdit = reward;
    //this.showDialogEdit = true;
    //this.rewardToEditServiceService.changeReward(reward);  
    this.rewardToEdit.emit(reward); 
  }
  
}
