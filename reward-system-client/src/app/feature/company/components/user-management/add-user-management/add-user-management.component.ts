import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '@company/shared/service/company.service';

@Component({
  selector: 'app-add-user-management',
  templateUrl: './add-user-management.component.html',
  styleUrls: ['./add-user-management.component.scss']
})
export class AddUserManagementComponent implements OnInit {

  @Input() visibleAdd: boolean;

  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    protected companyService:CompanyService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required]
    });

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  registerUser(){

  }

}
