import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as translation_ru from 'app/translations/translation_ru.json';
import * as translation_en from 'app/translations/translation_en.json';
import * as translation_de from 'app/translations/translation_de.json';
import * as translation_fr from 'app/translations/translation_fr.json';
import { CultureService } from './culture-service';
import { Culture } from './culture';
import { Observable } from 'rxjs/Observable';

/**
 * Сервис для перевода статического контента
 */
@Injectable()
export class StaticLocalizationService {
  private resources: BehaviorSubject<any>;
  private defaultLocale: any = translation_en;

  constructor(private cultureService: CultureService) {
    this.resources = new BehaviorSubject(this.defaultLocale);

    const culture = this.cultureService.getCurrentCulture();
    this.initTranslationDictionary(culture);
  }

  /**
 * Получить ресурсы перевода статического контента
 */
  public getTranslatableResources(): Observable<any> {
    return this.resources.asObservable();
  }

  public initTranslationDictionary(culture: Culture): any {
    const dictionary = this.getTranslationDictionary(culture);
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
        return this.defaultLocale;
    }
  }
}

