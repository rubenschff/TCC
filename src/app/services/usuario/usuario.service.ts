import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioDTO} from "@static/models/usuario/usuario.dto";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";
import {Cookie} from "@static/enumerators/cookie.enum";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiUrl = environment.api_url;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getById (accessToken: string): Observable<Omit<UsuarioDTO, 'token'>> {

    return this.http.get<Omit<UsuarioDTO, 'token'>>(this.apiUrl + '/usuario',
      {headers:{
        authorization: this.cookieService.get(Cookie.SESSION_ID)
      }});
  }


}
