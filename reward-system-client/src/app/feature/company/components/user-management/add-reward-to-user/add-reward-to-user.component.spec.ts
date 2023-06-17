import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardToUserComponent } from './add-reward-to-user.component';

describe('AddRewardToUserComponent', () => {
  let component: AddRewardToUserComponent;
  let fixture: ComponentFixture<AddRewardToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRewardToUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRewardToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
