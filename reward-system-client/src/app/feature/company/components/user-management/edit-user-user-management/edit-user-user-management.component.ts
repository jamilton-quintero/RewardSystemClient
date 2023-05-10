import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '@company/shared/model/dto/user-dto';
import { User } from '@company/shared/model/user';
import { UserService } from '@company/shared/service/user.service';

@Component({
  selector: 'app-edit-user-user-management',
  templateUrl: './edit-user-user-management.component.html',
  styleUrls: ['./edit-user-user-management.component.scss']
})
export class EditUserUserManagementComponent implements OnInit {

  @Input() visibleEdit: boolean;
  private _userToEdit: UserDto;

  @Input()
  set userToEdit(user: UserDto) {
    this._userToEdit = user;
    if (this.form) {
      this.populateForm(user);
    }
  }
  
  get userToEdit(): UserDto {
    return this._userToEdit;
  }

  @Output() userEdited = new EventEmitter<boolean>();
  
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
    
      if (this.userToEdit) {
        this.populateForm(this.userToEdit);
      }
    }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {
    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.editUser();

  }

  public editUser():void{

    const userEdited : User = {
      firstName: this.form.value.firstName,
      lastName : this.form.value.lastName,
      email : this.form.value.email,
      identification : this.form.value.identification,
    };

    this.userService.editUser(userEdited, this.userToEdit.id).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.userEdited.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }

  private populateForm(user: UserDto): void {
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      identification: user.identification
    });
  }

}
