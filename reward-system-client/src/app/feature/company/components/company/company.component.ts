import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  constructor(
  ){

  }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/company/home" },
          { label: 'users', icon: 'pi pi-fw pi-calendar' , routerLink: "/company/user-management"},
          { label: 'Rewars', icon: 'pi pi-fw pi-pencil' , routerLink: "/company/reward-management"},
          { label: 'Settings', icon: 'pi pi-fw pi-cog' , routerLink: "/company/configuration"}
      ];

      this.activeItem = this.items[0];
  }

  activateLast() {
      this.activeItem = this.items[this.items.length - 1];
  }
}
