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
    LoadMasiveUserUserManagementComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    TabMenuModule,
    TableModule,
    FileUploadModule,
    InputTextModule,
    DialogModule,
    TranslateModule,
  ],

  providers: [CompanyService]
})
export class CompanyModule { }
