import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {UsuarioDTO} from "@static/models/usuario/usuario.dto";
import {PerguntaDTO} from "@static/models/pergunta/pergunta.dto";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})


export class CadastroService {
  private apiUrl = environment.api_url;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

    cadastro(usuario: Omit<UsuarioDTO, 'id' | 'token'>){
    return this.http.post<UsuarioDTO>(this.apiUrl + '/cadastrar', usuario).subscribe(
      (response) => {
        console.log(response);
        this.cookieService.set('accessToken', response.accessToken); //ToDo passar o id e token para o cookie
        this.cookieService.set('userId',JSON.stringify(response.id))
      },
      error => {console.log(error.message)},
      () =>{console.log('Passou!')}
    )
  }
}
