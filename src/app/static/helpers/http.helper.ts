import { Injectable } from '@angular/core';
import { CookieHelper } from './cookie.helper';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelper {

  constructor(private cookieHelper: CookieHelper) {}

  getHttpOptions(params?: HttpParams) {

    return {
      headers: { authorization: this.cookieHelper.sessionId },
      params: params
    };
  }
}
