import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cookie} from "@static/enumerators/cookie.enum";
import {CookieService} from "ngx-cookie-service";


interface Financeiro {
  arrecadado: number,
  acumulado: number,
  disponivel: number
}
@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private apiUrl = environment.api_url;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }


  financeiroById():Observable<Financeiro>{
    return this.http.get<Financeiro>(this.apiUrl + '/financeiro',
      {headers:{
          authorization: this.cookieService.get(Cookie.SESSION_ID)
        }});
  }
}
