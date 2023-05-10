import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserUserManagementComponent } from './edit-user-user-management.component';

describe('EditUserUserManagementComponent', () => {
  let component: EditUserUserManagementComponent;
  let fixture: ComponentFixture<EditUserUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserUserManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
