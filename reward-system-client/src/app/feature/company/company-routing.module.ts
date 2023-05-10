import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RewardManagementComponent } from './components/reward-management/reward-management.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CompanyComponent } from './components/company/company.component';
import { AddUserManagementComponent } from './components/user-management/add-user-management/add-user-management.component';
import { DeleteUserManagementComponent } from './components/user-management/delete-user-management/delete-user-management.component';
import { EditUserUserManagementComponent } from './components/user-management/edit-user-user-management/edit-user-user-management.component';
import { GetUserManagementComponent } from './components/user-management/get-user-management/get-user-management.component';
import { LoadMasiveUserUserManagementComponent } from './components/user-management/load-masive-user-user-management/load-masive-user-user-management.component';
import { AddRewardManagementComponent } from './components/reward-management/add-reward-management/add-reward-management.component';
import { EditRewardManagementComponent } from './components/reward-management/edit-reward-management/edit-reward-management.component';
import { ListRewardManagementComponent } from './components/reward-management/list-reward-management/list-reward-management.component';
import { DeleteRewardManagementComponent } from './components/reward-management/delete-reward-management/delete-reward-management.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'user-management', component: UserManagementComponent,
        children: [
          { path: 'create', component: AddUserManagementComponent },
          { path: 'delete', component: DeleteUserManagementComponent },
          { path: 'edit', component: EditUserUserManagementComponent },
          { path: 'get', component: GetUserManagementComponent },
          { path: 'load-data', component: LoadMasiveUserUserManagementComponent },
        ],
      },

      { path: 'reward-management', component: RewardManagementComponent,
      children: [
        { path: 'create', component: AddRewardManagementComponent },
        { path: 'delete', component: DeleteRewardManagementComponent },
        { path: 'edit', component: EditRewardManagementComponent },
        { path: 'list', component: ListRewardManagementComponent },
      ], },
      { path: 'configuration', component: ConfigurationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
