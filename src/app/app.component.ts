import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticLocalizationService } from './shared/static-localization.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Culture } from './shared/culture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private translateSubscription: Subscription;
  public resources: any;
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

  title = 'app';

  constructor(private staticLocalizationService: StaticLocalizationService) {
  }

  ngOnInit() {
    this.translateSubscription = this.staticLocalizationService
    .getTranslatableResources()
    .subscribe(resources => (this.resources = resources));
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  onChangeLanguage(newValue: number) {
    console.log(newValue);
    // let culture = Culture[newValue];
  }
}
