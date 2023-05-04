import { Component, OnInit } from '@angular/core';
import { UserDto } from '@company/shared/model/dto/user-dto';
import { CompanyService } from '@company/shared/service/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-user-management',
  templateUrl: './get-user-management.component.html',
  styleUrls: ['./get-user-management.component.scss']
})
export class GetUserManagementComponent implements OnInit{

  public users: Observable<UserDto[]>;
  
  constructor(
    protected companyService:CompanyService) { }

  ngOnInit(): void {
    this.users = this.companyService.getusersByCompany(1);
  }

  onEditUser(user: any) {
    // Abre un modal o un formulario para editar los detalles del usuario
    console.log('Editar usuario:', user);
  }

  onDeleteUser(user: any) {
    // Elimina al usuario de la lista y actualiza la base de datos
    console.log('Eliminar usuario:', user);
  }

}
