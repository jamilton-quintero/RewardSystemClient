import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-masive-user-user-management',
  templateUrl: './load-masive-user-user-management.component.html',
  styleUrls: ['./load-masive-user-user-management.component.scss']
})
export class LoadMasiveUserUserManagementComponent {

  @Input() visibleLoad: boolean;
  
  onUpload(event: any) {
    // Procesa el archivo cargado y actualiza la lista de usuarios
    console.log('Archivo cargado:', event.files);
  }

}

