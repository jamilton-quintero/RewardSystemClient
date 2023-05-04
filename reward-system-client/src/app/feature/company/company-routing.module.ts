import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RewardManagementComponent } from './components/reward-management/reward-management.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'reward-management', component: RewardManagementComponent },
      { path: 'configuration', component: ConfigurationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
