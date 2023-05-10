import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-masive-user-user-management',
  templateUrl: './load-masive-user-user-management.component.html',
  styleUrls: ['./load-masive-user-user-management.component.scss']
})
export class LoadMasiveUserUserManagementComponent implements OnInit{

  @Input() visibleLoad: boolean;
  @Output()
  hideLoad = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onUpload(event: any) {
    // Procesa el archivo cargado y actualiza la lista de usuarios
    console.log('Archivo cargado:', event.files);
  }

}

