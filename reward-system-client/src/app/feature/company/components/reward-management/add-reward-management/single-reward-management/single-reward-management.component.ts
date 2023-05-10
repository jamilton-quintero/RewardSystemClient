import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private formBuilder: FormBuilder,
    protected rewardService: RewardService
    ) { }

  ngOnInit(): void {

    this.offForm = this.formBuilder.group({

      pointsToRedeem: ['', Validators.required],
      availableRewards: ['', Validators.required],
      dailyPointsLimit: ['', Validators.required],
      weeklyPointsLimit: ['', Validators.required],
      pointsAccumulatedMessage: ['', Validators.required],
      redemptionMessage: ['', Validators.required],
      pointsRange: ['', Validators.required],
      expirationDate: ['', Validators.required],
    
    });

  }

  get offFormControls(): { [key: string]: AbstractControl } {
    return this.offForm.controls;
  }

  onSubmitOffForm(): void {
    // Lógica de envío del formulario cuando multiReward es 'off'
  }

  onSubmit(): void {
    
    this.submitted = true;

    if (this.offForm.invalid) {
      return;
    }

    this.createNewUser();

  }

  public createNewUser():void{

    const newReward : Reward = {
      pointsToRedeem: this.offForm.value.pointsToRedeem,
      availableRewards : this.offForm.value.availableRewards,
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
