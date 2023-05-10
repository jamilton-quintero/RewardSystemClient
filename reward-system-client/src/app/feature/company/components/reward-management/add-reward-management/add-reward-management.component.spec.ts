import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardManagementComponent } from './add-reward-management.component';

describe('AddRewardManagementComponent', () => {
  let component: AddRewardManagementComponent;
  let fixture: ComponentFixture<AddRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
