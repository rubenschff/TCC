import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginDTO } from "@static/models/usuario/login.dto";
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { Observable } from 'rxjs';
import { CadastroDTO } from '@static/models/usuario/cadastro.dto';
import { DateHelper } from '@static/helpers/date.helper';
import { EditarDTO } from '@static/models/usuario/editar.dto';
import { HttpHelper } from '@static/helpers/http.helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private utilHelper: HttpHelper
  ) { }

  login(loginDTO: LoginDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(EndpointsConstant.USUARIO.LOGIN, loginDTO);
  }

  cadastro(cadastroDTO: CadastroDTO) {
    cadastroDTO.dateOfBirth = new Date(DateHelper.getDateYYYYMMDDFormat(cadastroDTO.dateOfBirth));
    return this.http.post<UsuarioDTO>(EndpointsConstant.USUARIO.CADASTRO, cadastroDTO);
  }

  get(): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(EndpointsConstant.USUARIO.USUARIO, this.utilHelper.getHttpOptions());
  }

  update(editarDTO: EditarDTO): Observable<UsuarioDTO> {
    return this.http.put<UsuarioDTO>(EndpointsConstant.USUARIO.USUARIO, editarDTO, this.utilHelper.getHttpOptions());
  }
}
