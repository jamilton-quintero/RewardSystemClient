import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRewardManagementComponent } from './single-reward-management.component';

describe('SingleRewardManagementComponent', () => {
  let component: SingleRewardManagementComponent;
  let fixture: ComponentFixture<SingleRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
