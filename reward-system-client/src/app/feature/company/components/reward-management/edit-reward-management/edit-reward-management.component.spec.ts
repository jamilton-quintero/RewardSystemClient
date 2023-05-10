import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRewardManagementComponent } from './edit-reward-management.component';

describe('EditRewardManagementComponent', () => {
  let component: EditRewardManagementComponent;
  let fixture: ComponentFixture<EditRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
