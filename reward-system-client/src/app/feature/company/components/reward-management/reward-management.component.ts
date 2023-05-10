import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ListRewardManagementComponent } from './list-reward-management/list-reward-management.component';

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

  constructor() { }

  ngOnInit(): void {

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  /*showDialogAddReward() {
    //this.showDialogAdd = true;
    this.router.navigate(['/create']);
  }*/

  showAddRewardForm() {
    this.showAddForm = true;
    this.showAddList = false;
    
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
}
