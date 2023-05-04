import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserManagementComponent } from './get-user-management.component';

describe('GetUserManagementComponent', () => {
  let component: GetUserManagementComponent;
  let fixture: ComponentFixture<GetUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
