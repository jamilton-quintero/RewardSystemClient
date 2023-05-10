import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RewardService } from '@company/shared/service/reward.service';

@Component({
  selector: 'app-delete-reward-management',
  templateUrl: './delete-reward-management.component.html',
  styleUrls: ['./delete-reward-management.component.scss']
})
export class DeleteRewardManagementComponent implements OnInit{

  @Input()  idReward:number;

  @Output() rewardDeleted = new EventEmitter<boolean>();
  
  constructor(
    protected rewardService: RewardService) { }

  ngOnInit(): void {}

  onDeleteReward() {
    this.rewardService.deleteReward(this.idReward).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.rewardDeleted.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }
}
