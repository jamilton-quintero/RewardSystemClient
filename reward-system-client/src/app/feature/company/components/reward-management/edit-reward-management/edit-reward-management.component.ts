import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardDto } from '@company/shared/model/dto/reward-dto';
import { Reward } from '@company/shared/model/reward';
import { RewardService } from '@company/shared/service/reward.service';

@Component({
  selector: 'app-edit-reward-management',
  templateUrl: './edit-reward-management.component.html',
  styleUrls: ['./edit-reward-management.component.scss']
})
export class EditRewardManagementComponent implements OnInit {

  
  @Input() visibleEdit: boolean;
  private _rewardToEdit: RewardDto;

  @Input()
  set rewardToEdit(user: RewardDto) {
    this._rewardToEdit = user;
    if (this.form) {
      this.populateForm(user);
    }
  }
  
  get rewardToEdit(): RewardDto {
    return this._rewardToEdit;
  }

  @Output() rewardEdited = new EventEmitter<boolean>();
  
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    protected rewardService: RewardService) { 

    }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        pointsToRedeem: ['', Validators.required],
        availableRewards: ['', Validators.required],
        dailyPointsLimit: ['', Validators.required],
        weeklyPointsLimit: ['', Validators.required],
        pointsAccumulatedMessage: ['', Validators.required],
        redemptionMessage: ['', Validators.required],
        pointsRange: ['', Validators.required],
        expirationDate: ['', Validators.required]
      });
    
      if (this.rewardToEdit) {
        this.populateForm(this.rewardToEdit);
      }
    }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.rewardUser();

  }

  public rewardUser():void{

    const rewardEdited : Reward = {
      pointsToRedeem: this.form.value.pointsToRedeem,
      name : this.form.value.availableRewards,
      dailyPointsLimit : this.form.value.dailyPointsLimit,
      weeklyPointsLimit : this.form.value.weeklyPointsLimit,
      pointsAccumulatedMessage : this.form.value.pointsAccumulatedMessage,
      redemptionMessage : this.form.value.redemptionMessage,
      pointsRange : this.form.value.pointsRange,
      expirationDate : this.form.value.expirationDate
    };

    this.rewardService.editReward(rewardEdited, this.rewardToEdit.id).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.rewardEdited.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

  private populateForm(reward: RewardDto): void {
    this.form.patchValue({
      pointsToRedeem: reward.pointsToRedeem,
      availableRewards : reward.name,
      dailyPointsLimit : reward.dailyPointsLimit,
      weeklyPointsLimit : reward.weeklyPointsLimit,
      pointsAccumulatedMessage : reward.pointsAccumulatedMessage,
      redemptionMessage : reward.redemptionMessage,
      pointsRange : reward.pointsRange,
      expirationDate : reward.expirationDate
    });
  }

}
