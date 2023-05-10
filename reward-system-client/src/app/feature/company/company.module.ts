import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RewardManagementComponent } from './components/reward-management/reward-management.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { CompanyComponent } from './components/company/company.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CompanyService } from './shared/service/company.service';
import { SharedModule } from '@shared/shared.module';
import { DeleteUserManagementComponent } from './components/user-management/delete-user-management/delete-user-management.component';
import { GetUserManagementComponent } from './components/user-management/get-user-management/get-user-management.component';
import { AddUserManagementComponent } from './components/user-management/add-user-management/add-user-management.component';
import { LoadMasiveUserUserManagementComponent } from './components/user-management/load-masive-user-user-management/load-masive-user-user-management.component';
import { EditUserUserManagementComponent } from './components/user-management/edit-user-user-management/edit-user-user-management.component';
import { UserService } from './shared/service/user.service';
import { CoreModule } from '@core/core.module';
import { AddRewardManagementComponent } from './components/reward-management/add-reward-management/add-reward-management.component';
import { EditRewardManagementComponent } from './components/reward-management/edit-reward-management/edit-reward-management.component';
import { ListRewardManagementComponent } from './components/reward-management/list-reward-management/list-reward-management.component';
import { RewardService } from './shared/service/reward.service';
import { DeleteRewardManagementComponent } from './components/reward-management/delete-reward-management/delete-reward-management.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PickListModule } from 'primeng/picklist';
import { TimelineModule } from 'primeng/timeline';
import { SingleRewardManagementComponent } from './components/reward-management/add-reward-management/single-reward-management/single-reward-management.component';
import { SubRewardManagementComponent } from './components/reward-management/add-reward-management/sub-reward-management/sub-reward-management.component';
import { AddSubRewardManagementComponent } from './components/reward-management/add-reward-management/sub-reward-management/add-sub-reward-management/add-sub-reward-management.component';
import { SubRewardService } from './shared/service/sub-reward.service';

@NgModule({
  declarations: [
    UserManagementComponent,
    RewardManagementComponent,
    ConfigurationComponent,
    HomeComponent,
    CompanyComponent,
    DeleteUserManagementComponent,
    GetUserManagementComponent,
    AddUserManagementComponent,
    LoadMasiveUserUserManagementComponent,
    EditUserUserManagementComponent,
    AddRewardManagementComponent,
    EditRewardManagementComponent,
    ListRewardManagementComponent,
    DeleteRewardManagementComponent,
    SingleRewardManagementComponent,
    SubRewardManagementComponent,
    AddSubRewardManagementComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    CoreModule,
    TabMenuModule,
    TableModule,
    FileUploadModule,
    InputTextModule,
    DialogModule,
    TranslateModule,
    SelectButtonModule,
    PickListModule,
    TimelineModule
  ],

  providers: [CompanyService, UserService, RewardService, SubRewardService]
})
export class CompanyModule { }
