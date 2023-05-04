import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr', 'de']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getLangs() {
    return this.translate.getLangs();
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }
}
