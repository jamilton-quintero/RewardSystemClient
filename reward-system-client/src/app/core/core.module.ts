import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule, DatePipe } from "@angular/common";
import { SecurityGuard } from "./guard/security.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./interceptor/token-interceptor";
import { AuthInterceptor } from "./interceptor/auth-interceptor";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { HttpService } from "./services/http.service";
import { ManejadorError } from "./interceptor/manejador-error";
import { RouterModule } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ToolbarComponent, FooterComponent, SidebarComponent],
  providers: [
    HttpService,
    SecurityGuard,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError },
  ],
})
export class CoreModule {}
