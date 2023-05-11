import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-reward-management',
  templateUrl: './add-reward-management.component.html',
  styleUrls: ['./add-reward-management.component.scss']
})
export class AddRewardManagementComponent implements OnInit {
  
  //@Input() visibleAdd: boolean;
  
  @Output() rewardCreated = new EventEmitter<boolean>();
  
  submitted = false;

  stateOptions: any[] = [
    { label: 'Off', value: false },
    { label: 'On', value: true }
    ];
  
  selectedState: string = this.stateOptions[0].value;
  
  constructor() { }

  ngOnInit(): void {

  }

  onStateChange(state: string): void {
    console.log(state);
    this.selectedState = state;
  }

}
