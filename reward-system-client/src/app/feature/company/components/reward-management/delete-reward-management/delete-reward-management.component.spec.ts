import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRewardManagementComponent } from './delete-reward-management.component';

describe('DeleteRewardManagementComponent', () => {
  let component: DeleteRewardManagementComponent;
  let fixture: ComponentFixture<DeleteRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
