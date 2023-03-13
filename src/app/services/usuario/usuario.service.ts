import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioDTO} from "@static/models/usuario/usuario.dto";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }

  getById (id: number,token: string): Observable<Omit<UsuarioDTO, 'token'>> {
    return this.http.get<Omit<UsuarioDTO, 'token'>>(this.apiUrl + '/usuario/'+ id);
  }


}