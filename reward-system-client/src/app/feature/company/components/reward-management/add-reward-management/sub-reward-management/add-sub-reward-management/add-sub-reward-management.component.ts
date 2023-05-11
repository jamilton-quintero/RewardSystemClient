import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubReward } from '@company/shared/model/sub-reward';
import { SubRewardService } from '@company/shared/service/sub-reward.service';

@Component({
  selector: 'app-add-sub-reward-management',
  templateUrl: './add-sub-reward-management.component.html',
  styleUrls: ['./add-sub-reward-management.component.scss']
})
export class AddSubRewardManagementComponent implements OnInit{

  @Input() visibleAdd: boolean;
  @Output() subRewardCreated = new EventEmitter<boolean>();
  @Output() modalClosed = new EventEmitter<boolean>();

  offForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    protected subRewardService: SubRewardService
    ) { }

  ngOnInit(): void {

    this.offForm = this.formBuilder.group({

      pointsToRedeem: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  get offFormControls(): { [key: string]: AbstractControl } {
    return this.offForm.controls;
  }


  onSubmit(): void {
    
    this.submitted = true;

    if (this.offForm.invalid) {
      return;
    }

    this.createNewSubReward();

  }

  public createNewSubReward():void{

    const newReward : SubReward = {
      pointsToRedeem: this.offForm.value.pointsToRedeem,
      name : this.offForm.value.name
    };

    this.subRewardService.createSubReward(newReward, 1).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.subRewardCreated.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

  public onHideModal(){
    this.subRewardCreated.emit(true); 
  }

}
