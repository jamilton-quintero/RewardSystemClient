import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup} from '@angular/forms';
import { GetUserManagementComponent } from './get-user-management/get-user-management.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  @ViewChild(GetUserManagementComponent) getListComponent: GetUserManagementComponent;

  visibleLoadData: boolean;
  showDialogAdd: boolean;

  form: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  showDialogLoadData() {
    this.visibleLoadData = true;
  }

  showDialogAddUser() {
    this.showDialogAdd = true;
  }

  userCreated(isUserCreated: boolean): void {
    if (isUserCreated) {
      this.showDialogAdd = false;
      this.getListComponent.refreshUsers();
    }
  }

}
