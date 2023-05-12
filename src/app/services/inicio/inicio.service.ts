import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {Cookie} from "@static/enumerators/cookie.enum";

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private apiUrl = environment.api_url;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }


  inicio():Observable<any>{
    return this.http.get(this.apiUrl,
      {headers:{
          authorization: this.cookieService.get(Cookie.SESSION_ID)
        }});
  }
}
