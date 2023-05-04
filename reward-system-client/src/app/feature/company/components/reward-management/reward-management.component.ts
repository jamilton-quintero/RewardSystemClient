import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reward-management',
  templateUrl: './reward-management.component.html',
  styleUrls: ['./reward-management.component.scss']
})
export class RewardManagementComponent implements OnInit{
  rewars = [
    {
      name: 'Gran promocion anual',
      porintsToRedem: 100,
      expirationDate: "2023-10-10"
    },
    // ... otros usuarios ...
  ];
  visible: boolean;
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pointsToRedeem: ['', Validators.required],
      availableRewards: ['', Validators.required],
      dailyPointsLimit: ['', Validators.required],
      weeklyPointsLimit: ['', Validators.required],
      pointsAccumulatedMessage: ['', Validators.required],
      redemptionMessage: ['', Validators.required],
      pointsRange: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onEditUser(user: any) {
    // Abre un modal o un formulario para editar los detalles del usuario
    console.log('Editar usuario:', user);
  }

  onDeleteUser(user: any) {
    // Elimina al usuario de la lista y actualiza la base de datos
    console.log('Eliminar usuario:', user);
  }

  onSubmit(): void {
    if (this.f.valid) {
      // Envía los datos del formulario al backend
    }
  }

  registerCompanyConfig(){
    
  }

  showDialog() {
    this.visible = true;
}

}
