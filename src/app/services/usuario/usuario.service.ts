import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioDTO} from "@static/models/usuario/usuario.dto";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }

  getById (id: number,accessToken: string): Observable<Omit<UsuarioDTO, 'token'>> {
    //const auth = this.header.append('Authorization', 'Bearer '+accessToken)
    return this.http.get<UsuarioDTO>(this.apiUrl + '/usuario/'+ id);
  }


}
