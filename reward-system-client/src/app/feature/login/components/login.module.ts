import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from "../../../core/core.module";
import { SharedModule } from '@shared/shared.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        LoginRoutingModule,
        TranslateModule,
        CoreModule
    ]
})
export class LoginModule { }
