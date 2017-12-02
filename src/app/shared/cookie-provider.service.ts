import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

/**
 * Сервис обертка над сервисом cookie
 */
@Injectable()
export class CookieProviderService {
  constructor(private cookieService: CookieService) {}

  /**
   * Установка куки
   * @param cookieName имя куки
   * @param cookieValue значение куки
   */
  public put(cookieName: string, cookieValue: string): void {
    this.cookieService.set(cookieName, cookieValue, null, '/');
  }

  /**
   * Получение куки
   * @param cookieName имя куки
   */
  public get(cookieName: string): string {
    return this.cookieService.get(cookieName);
  }
}
