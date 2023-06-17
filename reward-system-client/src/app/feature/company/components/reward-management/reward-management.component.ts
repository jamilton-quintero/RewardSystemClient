import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ListRewardManagementComponent } from './list-reward-management/list-reward-management.component';
import { RewardDto } from '@company/shared/model/dto/reward-dto';

@Component({
  selector: 'app-reward-management',
  templateUrl: './reward-management.component.html',
  styleUrls: ['./reward-management.component.scss']
})
export class RewardManagementComponent implements OnInit{

  @ViewChild(ListRewardManagementComponent) getRewardListComponent: ListRewardManagementComponent;

  showDialogAdd: boolean;

  form: FormGroup;
  submitted = false;

  showAddForm = false;
  showAddList = true;

  rewardToEdit: RewardDto;

  constructor() { }

  ngOnInit(): void {

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  showAddRewardForm() {
    this.showAddForm = true;
    this.showAddList = false; 
    this.rewardToEdit = null;
  }

  showAddRewardList() {
    this.showAddList = true;
    this.showAddForm = false;
  }

  rewardCreated(isUserCreated: boolean): void {
    if (isUserCreated) {
      this.showDialogAdd = false;
      this.getRewardListComponent.refreshRewards();
    }
  }

  rewardToEditEvent(reward: RewardDto){
    this.showAddRewardForm();
    this.rewardToEdit = reward;
  }

}
