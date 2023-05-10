import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubRewardManagementComponent } from './add-sub-reward-management.component';

describe('AddSubRewardManagementComponent', () => {
  let component: AddSubRewardManagementComponent;
  let fixture: ComponentFixture<AddSubRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
