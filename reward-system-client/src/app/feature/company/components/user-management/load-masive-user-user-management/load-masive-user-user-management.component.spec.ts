import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMasiveUserUserManagementComponent } from './load-masive-user-user-management.component';

describe('LoadMasiveUserUserManagementComponent', () => {
  let component: LoadMasiveUserUserManagementComponent;
  let fixture: ComponentFixture<LoadMasiveUserUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMasiveUserUserManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMasiveUserUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
