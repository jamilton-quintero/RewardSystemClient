import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@core/services/language.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [],
})
export class ToolbarComponent implements OnInit {
  constructor(
    public translationService: LanguageService) { }
    
  ngOnInit() {

  }

  switchLang(lang: string) {
    this.translationService.switchLang(lang);
  }

}
