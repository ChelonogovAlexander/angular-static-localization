import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaticLocalizationService } from './shared/static-localization.service';
import { CultureService } from './shared/culture-service';
import { CookieProviderService } from './shared/cookie-provider.service';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService, CookieProviderService, CultureService, StaticLocalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
