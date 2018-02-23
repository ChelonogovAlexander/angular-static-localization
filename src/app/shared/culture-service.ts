import { Injectable } from '@angular/core';
import { CookieProviderService } from './cookie-provider.service';
import { Culture } from './culture';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * Сервис для работы с культурами
 */
@Injectable()
export class CultureService {
  private defaultLocale: Culture;
  private behaviourSubject: BehaviorSubject<Culture>;

  constructor(private cookieService: CookieProviderService) {
      this.defaultLocale = Culture.German;
      const initialCulture = this.getCurrentCulture();
      this.behaviourSubject = new BehaviorSubject(initialCulture);
  }

  /**
 * Сменить текущую культуру
 */
  public changeCurrentCulture(culture: Culture): void {
    this.behaviourSubject.next(culture);
  }

  /**
 * Получить текущую культуру
 */
  public getCurrentCulture(): Culture {
    const locale = this.cookieService.get('CurrentLocale');

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
