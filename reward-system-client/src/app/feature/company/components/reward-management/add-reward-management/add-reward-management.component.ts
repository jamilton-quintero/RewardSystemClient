import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { RewardDto } from '@company/shared/model/dto/reward-dto';
import { SubRewardService } from '@company/shared/service/sub-reward.service';

@Component({
  selector: 'app-add-reward-management',
  templateUrl: './add-reward-management.component.html',
  styleUrls: ['./add-reward-management.component.scss']
})
export class AddRewardManagementComponent implements OnInit {
  
  @Input() rewardToEdit: RewardDto;

  @Output() rewardCreated = new EventEmitter<boolean>();
  
  submitted = false;

  stateOptions: any[] = [
    { label: 'Off', value: false },
    { label: 'On', value: true }
    ];
  
  selectedState: boolean = this.stateOptions[0].value;
  
  constructor(
    protected subRewardService: SubRewardService
  ) { }

  ngOnInit(): void {

    console.log(this.rewardToEdit)

    if(this.rewardToEdit){

      if(this.rewardToEdit.multiReward){

        this.subRewardService.getSubRewardsByCompanyAndReward(1, this.rewardToEdit.id).subscribe(
          {
            next: (queryParams) => {
              this.selectedState = this.rewardToEdit.multiReward;
              console.log('queryParams', queryParams);
              //this.rewardCreated.emit(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          }
        );
        
      }

    }

  }

  onStateChange(state: boolean): void {
    console.log(state);
    this.selectedState = state;
  }

}
