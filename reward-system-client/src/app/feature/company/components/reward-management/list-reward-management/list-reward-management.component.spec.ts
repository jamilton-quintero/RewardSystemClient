import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRewardManagementComponent } from './list-reward-management.component';

describe('ListRewardManagementComponent', () => {
  let component: ListRewardManagementComponent;
  let fixture: ComponentFixture<ListRewardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRewardManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRewardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
