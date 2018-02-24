import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaticLocalizationService } from './shared/static-localization.service';
import { CookieProviderService } from './shared/cookie-provider.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService, CookieProviderService, StaticLocalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
