import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieHelper {

  constructor(private cookieService: CookieService) {}

  get sessionId(): string {
    return this.cookieService.get(Cookie.SESSION_ID);
  }

  set sessionId(sessionId: string) {
    this.cookieService.set(Cookie.SESSION_ID, sessionId);
  }

  removeSessionId() {
    this.cookieService.delete(Cookie.SESSION_ID);
  }

  get userId(): string {
    return this.cookieService.get(Cookie.USER_ID);
  }
}

enum Cookie {
  SESSION_ID = "SESSION_ID",
  USER_ID = "userId",
}
