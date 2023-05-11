import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubRewardDto } from '@company/shared/model/dto/sub-reward-dto';
import { Reward } from '@company/shared/model/reward';
import { RewardService } from '@company/shared/service/reward.service';
import { SubRewardService } from '@company/shared/service/sub-reward.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sub-reward-management',
  templateUrl: './sub-reward-management.component.html',
  styleUrls: ['./sub-reward-management.component.scss']
})
export class SubRewardManagementComponent implements OnInit {

  //@Input() visibleAdd: boolean;

  @Output() rewardCreated = new EventEmitter<boolean>();

  showAddForm = false;

  onForm: FormGroup;
  submitted = false;

  targetProducts: any[] = [];

  events: any[];

  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];

  selectedState: string = this.stateOptions[0].value;;

  public subRewards: Observable<SubRewardDto[]>;

  constructor(
    private formBuilder: FormBuilder,
    protected rewardService: RewardService,
    protected subRewardService: SubRewardService
  ) { }

  ngOnInit(): void {

    this.events = [];

    this.onForm = this.formBuilder.group({

      rewardName: ['', Validators.required],
      dailyPointsLimit: ['', Validators.required],
      weeklyPointsLimit: ['', Validators.required],
      pointsAccumulatedMessage: ['', Validators.required],
      redemptionMessage: ['', Validators.required],
      expirationDate: ['', Validators.required],

    });

    this.refreshSubRewards();

  }

  get onFormControls(): { [key: string]: AbstractControl } {
    return this.onForm.controls;
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

    if (this.onForm.invalid) {
      return;
    }

    this.createNewUser();

  }

  public createNewUser(): void {

    const newReward: Reward = {
      pointsToRedeem: this.onForm.value.pointsToRedeem,
      availableRewards: this.onForm.value.availableRewards,
      dailyPointsLimit: this.onForm.value.dailyPointsLimit,
      weeklyPointsLimit: this.onForm.value.weeklyPointsLimit,
      pointsAccumulatedMessage: this.onForm.value.pointsAccumulatedMessage,
      redemptionMessage: this.onForm.value.redemptionMessage,
      pointsRange: this.onForm.value.pointsRange,
      expirationDate: this.onForm.value.expirationDate
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

  showAddSubRewardForm() {
    this.showAddForm = true;
  }

  subRewardCreated(isSubReward: boolean): void {
    if (isSubReward) {
      this.showAddForm = false;
      this.refreshSubRewards();
    }
  }

  modalClosed(isSubRewardClosed: boolean): void {
    if (isSubRewardClosed) {
      this.showAddForm = false;
    }
  }

  refreshSubRewards(): void {
    this.subRewardService.getSubRewardsByCompany(1).subscribe(response => {
      const newSubRewards = response.filter(subReward =>
        !this.targetProducts.some(targetProduct => targetProduct.id === subReward.id)
      );
      this.subRewards = of(newSubRewards);
    });
  }


  onMoveToSource(): void {
    setTimeout(() => {
      this.updateEvents();
      this.subRewardService.getSubRewardsByCompany(1).subscribe(response => {
        const removedSubRewards = response.filter(subReward =>
          !this.targetProducts.some(targetProduct => targetProduct.id === subReward.id)
        );

        this.subRewards = of(removedSubRewards);
      });
    }, 0);
  }

  onMoveToTarget(): void {
    setTimeout(() => this.updateEvents(), 0);
  }


  updateEvents(): void {

    const lineTargetProducts = this.targetProducts;
    lineTargetProducts.sort((a, b) => a.pointsToRedeem - b.pointsToRedeem);
    this.events = null;
    this.events = lineTargetProducts.map(product => product.name);

  }

}
