import { Injectable } from '@angular/core';
import { CookieHelper } from './cookie.helper';

@Injectable({
  providedIn: 'root'
})
export class HttpHelper {

  constructor(private cookieHelper: CookieHelper) {}

  getHttpOptions() {
    return {
      headers: { authorization: this.cookieHelper.sessionId }
    };
  }
}
