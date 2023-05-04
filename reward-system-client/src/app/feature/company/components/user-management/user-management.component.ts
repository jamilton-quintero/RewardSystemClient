import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '@company/shared/model/dto/user-dto';
import { CompanyService } from '@company/shared/service/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public users: Observable<UserDto[]>;

  varBoo: true;
  visible: boolean;
  showDialogAdd: boolean;

  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    protected companyService: CompanyService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required]
    });

    this.users = this.companyService.getusersByCompany(1);

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  showDialog() {
    this.visible = true;
  }

  showDialogAddUser() {
    this.showDialogAdd = true;
  }

  registerUser() {

  }

}
