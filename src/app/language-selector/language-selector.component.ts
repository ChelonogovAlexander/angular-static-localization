import { Component, OnInit } from '@angular/core';
import { Culture } from './../shared/culture';
import { CultureService } from '../shared/culture-service';

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

  constructor(private cultureService: CultureService) {
  }

  ngOnInit() {
    this.currentCulture = this.cultureService.getCurrentCulture();
  }

  public onChangeLanguage(newValue: number) {
    console.log(newValue);
    const culture = Culture[Culture[newValue]];
    this.cultureService.changeCurrentCulture(culture);
  }
}
