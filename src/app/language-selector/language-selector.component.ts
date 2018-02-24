import { Component, OnInit } from '@angular/core';
import { Culture } from './../shared/culture';
import { StaticLocalizationService } from '../shared/static-localization.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  public languages = [{
    value: Culture.Russian,
    name: 'Русский'
}, {
  value: Culture.English,
  name: 'English'
}, {
  value: Culture.German,
  name: 'German'
}, {
  value: Culture.French,
  name: 'French'
}];

public currentCulture: Culture;

  constructor(private staticLocalizationService: StaticLocalizationService) {
  }

  ngOnInit() {
    this.currentCulture = this.staticLocalizationService.getCurrentCulture();
  }

  public onChangeLanguage(newValue: number) {
    const culture = Culture[Culture[newValue]];
    this.staticLocalizationService.changeCurrentCulture(culture);
  }
}
