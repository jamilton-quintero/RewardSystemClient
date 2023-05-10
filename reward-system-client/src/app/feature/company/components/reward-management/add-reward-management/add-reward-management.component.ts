import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reward } from '@company/shared/model/reward';
import { RewardService } from '@company/shared/service/reward.service';

@Component({
  selector: 'app-add-reward-management',
  templateUrl: './add-reward-management.component.html',
  styleUrls: ['./add-reward-management.component.scss']
})
export class AddRewardManagementComponent implements OnInit {
  
  //@Input() visibleAdd: boolean;
  
  @Output() rewardCreated = new EventEmitter<boolean>();
  
  form: FormGroup;
  offForm: FormGroup;
  onForm: FormGroup;
  submitted = false;

  sourceProducts: any[];
  targetProducts: any[];
  events: any[];

  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
    ];
  
  selectedState: string = this.stateOptions[0].value;;
  
  constructor(
    private formBuilder: FormBuilder,
    protected rewardService: RewardService
    ) { }

  ngOnInit(): void {

    this.events = [
      "2020", "2021", "2022", "2023"
    ];

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

    this.onForm = this.formBuilder.group({

      rewardName: ['', Validators.required],
      dailyPointsLimit: ['', Validators.required],
      weeklyPointsLimit: ['', Validators.required],
      pointsAccumulatedMessage: ['', Validators.required],
      redemptionMessage: ['', Validators.required],
      expirationDate: ['', Validators.required],
    
    });

  }

  get offFormControls(): { [key: string]: AbstractControl } {
    return this.offForm.controls;
  }
  
  get onFormControls(): { [key: string]: AbstractControl } {
    return this.onForm.controls;
  }

  onSubmitOffForm(): void {
    // Lógica de envío del formulario cuando multiReward es 'off'
  }

  onSubmitOnForm(): void {
    // Lógica de envío del formulario cuando multiReward es 'on'
  }

  onStateChange(state: string): void {
    console.log(state);
    this.selectedState = state;
  }

  onSubmit(): void {
    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.createNewUser();

  }

  public createNewUser():void{

    const newReward : Reward = {
      pointsToRedeem: this.form.value.pointsToRedeem,
      availableRewards : this.form.value.availableRewards,
      dailyPointsLimit : this.form.value.dailyPointsLimit,
      weeklyPointsLimit : this.form.value.weeklyPointsLimit,
      pointsAccumulatedMessage : this.form.value.pointsAccumulatedMessage,
      redemptionMessage : this.form.value.redemptionMessage,
      pointsRange : this.form.value.pointsRange,
      expirationDate : this.form.value.expirationDate
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
