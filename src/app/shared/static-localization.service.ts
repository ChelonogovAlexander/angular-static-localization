import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Culture } from './culture';
import { Observable } from 'rxjs/Observable';
import { CookieProviderService } from './cookie-provider.service';

import * as translation_ru from 'app/translations/translation_ru.json';
import * as translation_en from 'app/translations/translation_en.json';
import * as translation_de from 'app/translations/translation_de.json';
import * as translation_fr from 'app/translations/translation_fr.json';

/**
 * Сервис для перевода статического контента
 */
@Injectable()
export class StaticLocalizationService {
  private resources: BehaviorSubject<any>;
  private behaviourSubject: BehaviorSubject<Culture>;
  private defaultDictionary: any;
  private defaultCulture: Culture;

  private cookieName = 'CurrentLocale';

  constructor(private cookieService: CookieProviderService) {
    this.defaultCulture = Culture.English;
    this.defaultDictionary = translation_en;

    const initialCulture = this.getCurrentCulture();
    this.behaviourSubject = new BehaviorSubject(initialCulture);
    this.resources = new BehaviorSubject(this.defaultDictionary);

    const culture = this.getCurrentCulture();
    this.initTranslationDictionary(culture);
  }

  /**
  * Сменить текущую культуру
  */
   public changeCurrentCulture(culture: Culture): void {
     this.behaviourSubject.next(culture);
     this.initTranslationDictionary(culture);

     this.cookieService.put(this.cookieName, Culture[culture]);
   }

   /**
  * Получить текущую культуру
  */
   public getCurrentCulture(): Culture {
     const locale = this.cookieService.get(this.cookieName);

     if (!locale) {
         return this.defaultCulture;
   }

   const result = Culture[locale];

   if (result) {
     return result;
    }

   return this.defaultCulture;
 }

  /**
 * Получить ресурсы перевода статического контента
 */
  public getTranslatableResources(): Observable<Resourses> {
    return this.resources.asObservable();
  }

  private initTranslationDictionary(culture: Culture): void {
    const dictionary = this.getTranslationDictionary(culture) as Resourses;
    this.resources.next(dictionary);
    }

  /**
   * Метод для получения словарей локализации
   */
  private getTranslationDictionary(culture: Culture): any {
    switch (culture) {
      case Culture.Russian:
        return translation_ru;

      case Culture.English:
        return translation_en;

      case Culture.German:
        return translation_de;

      case Culture.French:
        return translation_fr;

      default:
        return this.defaultDictionary;
    }
  }
}
