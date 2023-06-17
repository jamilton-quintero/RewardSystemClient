import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardDto } from '@company/shared/model/dto/reward-dto';
import { Reward } from '@company/shared/model/reward';
import { RewardService } from '@company/shared/service/reward.service';

@Component({
  selector: 'app-single-reward-management',
  templateUrl: './single-reward-management.component.html',
  styleUrls: ['./single-reward-management.component.scss']
})
export class SingleRewardManagementComponent implements OnInit {
  
  //@Input() visibleAdd: boolean;
  
  @Output() rewardCreated = new EventEmitter<boolean>();
  
  offForm: FormGroup;
  submitted = false;

  private _rewardToEdit: RewardDto;
  @Input()
  set rewardToEdit(user: RewardDto) {
    this._rewardToEdit = user;
    if (this.offForm) {
      this.populateForm(user);
    }
  }

  get rewardToEdit(): RewardDto {
    return this._rewardToEdit;
  }

  constructor(
    private formBuilder: FormBuilder,
    protected rewardService: RewardService
    ) { }

  ngOnInit(): void {

    this.offForm = this.formBuilder.group({

      pointsToRedeem: ['', Validators.required],
      name: ['', Validators.required],
      dailyPointsLimit: ['', Validators.required],
      weeklyPointsLimit: ['', Validators.required],
      pointsAccumulatedMessage: ['', Validators.required],
      redemptionMessage: ['', Validators.required],
      pointsRange: ['', Validators.required],
      expirationDate: ['', Validators.required],
    
    });

    if (this.rewardToEdit) {
      this.populateForm(this.rewardToEdit);
    }
  }

  get offFormControls(): { [key: string]: AbstractControl } {
    return this.offForm.controls;
  }

  private populateForm(reward: RewardDto): void {
    this.offForm.patchValue({
      pointsToRedeem: reward.pointsToRedeem,
      name: reward.name,
      dailyPointsLimit: reward.dailyPointsLimit,
      weeklyPointsLimit: reward.weeklyPointsLimit,
      pointsAccumulatedMessage: reward.pointsAccumulatedMessage,
      redemptionMessage: reward.redemptionMessage,
      pointsRange: reward.pointsRange,
      expirationDate: reward.expirationDate
    });
  }

  onSubmitOffForm(): void {
    this.submitted = true;

    if (this.offForm.invalid) {
      return;
    }

    this.createNewReward();

  }

  public createNewReward():void{

    const newReward : Reward = {
      pointsToRedeem: this.offForm.value.pointsToRedeem,
      name : this.offForm.value.name,
      dailyPointsLimit : this.offForm.value.dailyPointsLimit,
      weeklyPointsLimit : this.offForm.value.weeklyPointsLimit,
      pointsAccumulatedMessage : this.offForm.value.pointsAccumulatedMessage,
      redemptionMessage : this.offForm.value.redemptionMessage,
      pointsRange : this.offForm.value.pointsRange,
      expirationDate : this.offForm.value.expirationDate
    };

    this.rewardService.createReward(newReward, 1).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.rewardCreated.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

}
