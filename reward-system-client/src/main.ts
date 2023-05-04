/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((_) => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
 