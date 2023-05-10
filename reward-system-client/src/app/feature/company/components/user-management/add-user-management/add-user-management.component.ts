import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@company/shared/model/user';
import { UserService } from '@company/shared/service/user.service';

@Component({
  selector: 'app-add-user-management',
  templateUrl: './add-user-management.component.html',
  styleUrls: ['./add-user-management.component.scss']
})
export class AddUserManagementComponent implements OnInit {

  @Input() visibleAdd: boolean;
  
  @Output() userCreated = new EventEmitter<boolean>();
  
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    protected userService: UserService) { }

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


  onSubmit(): void {
    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.createNewUser();

  }

  public createNewUser():void{

    const newUser : User = {
      firstName: this.form.value.firstName,
      lastName : this.form.value.lastName,
      email : this.form.value.email,
      identification : this.form.value.identification,
    };

    this.userService.createUser(newUser, 1).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.userCreated.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

}
