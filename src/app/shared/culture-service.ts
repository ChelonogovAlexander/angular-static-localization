import { Injectable } from '@angular/core';
import { CookieProviderService } from './cookie-provider.service';
import { Culture } from './culture';

/**
 * Сервис для работы с культурами
 */
@Injectable()
export class CultureService {
  private defaultLocale: Culture;

  constructor(private cookieService: CookieProviderService) {
      this.defaultLocale = Culture.German;
  }

  /**
 * Получить текущую культуру
 */
  public getCurrentCulture(): Culture {
    let locale = this.cookieService.get('CurrentLocale');

    if (!locale) {
        return this.defaultLocale;
  }

  switch (locale.toUpperCase()) {
    case 'РУС':
      return Culture.Russian;

    case 'АНГ':
      return Culture.English;

    case 'ГЕР':
        return Culture.German;

    case 'ФРА':
        return Culture.French;

    default:
      return this.defaultLocale;
  }
}
}
