import { Component, OnInit } from '@angular/core';
import { Culture } from './../shared/culture';

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

  constructor() { }

  ngOnInit() {
  }

  public onChangeLanguage(newValue: number) {
    console.log(newValue);
    // let culture = Culture[newValue];
  }
}
