import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRewardManagementComponent } from './sub-reward-management.component';

describe('SubRewardManagementComponent', () => {
  let component: SubRewardManagementComponent;
  let fixture: ComponentFixture<SubRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
