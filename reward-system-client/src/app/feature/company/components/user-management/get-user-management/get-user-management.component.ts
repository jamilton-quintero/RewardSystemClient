import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '@company/shared/model/dto/user-dto';
import { UserService } from '@company/shared/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-user-management',
  templateUrl: './get-user-management.component.html',
  styleUrls: ['./get-user-management.component.scss']
})
export class GetUserManagementComponent implements OnInit{

  @Input() isUsercreated:boolean;
  
  showDialogEdit: boolean;
  userToEdit : UserDto;
  showDialogAddReward: boolean;

  public users: Observable<UserDto[]>;
  
  constructor(
    protected userService: UserService) { }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void {
    this.users = this.userService.getUsersByCompany(1);
  }

  userEdited(isUserEdited: boolean): void {
    if (isUserEdited) {
      this.showDialogEdit = false;
      this.refreshUsers();
    }
  }

  userDeleted(isUserDeleted: boolean): void {
    if (isUserDeleted) {
      this.refreshUsers();
    }
  }

  onEditUser(user:UserDto) {
    this.userToEdit = user;
    this.showDialogEdit = true;
  }

  onAddRewardUser(user:UserDto) {
    console.log(user);
    this.showDialogAddReward = true;
  }

  rewardAdded(isRewardAdded: boolean): void {
    if (isRewardAdded) {
      this.showDialogAddReward = false;
      this.refreshUsers();
    }
  }

}
