import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginDTO } from "@static/models/usuario/login.dto";
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { Observable } from 'rxjs';
import { CadastroDTO } from '@static/models/usuario/cadastro.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(loginDTO: LoginDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(EndpointsConstant.USUARIO.LOGIN, loginDTO);
  }

  cadastro(cadastroDTO: CadastroDTO) {
    return this.http.post<UsuarioDTO>(EndpointsConstant.USUARIO.LOGIN, cadastroDTO);
  }
}
