import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '@company/shared/service/user.service';

@Component({
  selector: 'app-delete-user-management',
  templateUrl: './delete-user-management.component.html',
  styleUrls: ['./delete-user-management.component.scss']
})
export class DeleteUserManagementComponent implements OnInit {

  @Input()  idUser:number;

  @Output() userDeleted = new EventEmitter<boolean>();
  
  constructor(
    protected userService: UserService) { }

  ngOnInit(): void {}

  onDeleteUser() {
    this.userService.deleteUser(this.idUser).subscribe(
      {
        next: (queryParams) => {
          console.log('queryParams', queryParams);
          this.userDeleted.emit(true); 
        },
        error: (err: any) => { 
          console.log(err);
        },
      }
    );
  }


}
