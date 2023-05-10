import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '@company/shared/service/company.service';
import { Company } from 'src/app/feature/company/shared/model/company';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  registerMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      fullname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'matching': true };
    }
    return null;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.createNewCompany();

  }

  public createNewCompany(): void {

    const newCompany: Company = {
      name: this.form.value.fullname,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.companyService.createCompany(newCompany).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

  public login() {
    /*if(this.form.value.email === "danny-mz@hotmail.com" && this.form.value.password === "123456" ){
      this.router.navigate(['company']);
    }*/
    this.router.navigate(['/company/home']);
  }

  switchForm(): void {
    this.registerMode = !this.registerMode;
    this.submitted = false;
    this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
