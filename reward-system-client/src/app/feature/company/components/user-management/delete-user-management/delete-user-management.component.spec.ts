import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserManagementComponent } from './delete-user-management.component';

describe('DeleteUserManagementComponent', () => {
  let component: DeleteUserManagementComponent;
  let fixture: ComponentFixture<DeleteUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
