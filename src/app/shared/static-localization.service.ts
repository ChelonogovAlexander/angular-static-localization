import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as translation_ru from 'app/translations/translation_ru.json';
import * as translation_en from 'app/translations/translation_en.json';
import * as translation_de from 'app/translations/translation_de.json';
import * as translation_fr from 'app/translations/translation_fr.json';
import { CultureService } from './culture-service';
import { Culture } from './culture';

/**
 * Сервис для перевода статического контента
 */
@Injectable()
export class StaticLocalizationService {
  private resources: BehaviorSubject<any>;
  private defaultLocale: any = translation_en;

  constructor(private cultureService: CultureService) {
    this.resources = new BehaviorSubject(this.defaultLocale);
    this.initTranslationDictionary();
  }

  /**
 * Получить ресурсы перевода статического контента
 */
  public getTranslatableResources(): Subject<any> {
    return this.resources;
  }

  private initTranslationDictionary(): any {
    let dictionary = this.getTranslationDictionary();
    this.resources.next(dictionary);
    }

  /**
   * Метод для получения словарей локализации
   */
  private getTranslationDictionary(): any {

    let culture = this.cultureService.getCurrentCulture();

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

