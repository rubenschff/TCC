import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {UsuarioDTO} from "@static/models/usuario/usuario.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.api_url;

  constructor(private http: HttpClient) { }


  login (usuario: Omit<UsuarioDTO, 'id'|'token'>) {
      console.log(usuario)
      return this.http.post<UsuarioDTO>(this.urlApi + '/entrar', usuario);
  }
}
