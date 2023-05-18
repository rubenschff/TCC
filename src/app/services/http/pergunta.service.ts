import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ListaRespostaDTO } from '@static/models/pergunta/lista-resposta.dto';
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';
import { PerguntaDTO } from '@static/models/pergunta/pergunta.dto';
import { HttpHelper } from '@static/helpers/http.helper';
import { RespostaDTO } from '@static/models/pergunta/resposta.dto';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelper
  ) { }

  getAll(): Observable<Array<ListaRespostaDTO>> {
    return this.http.get<Array<ListaRespostaDTO>>(EndpointsConstant.PERGUNTA.PERGUNTAS);
  }

  proximaPergunta(): Observable<PerguntaRespostaDTO> {
    return this.http.get<PerguntaRespostaDTO>(EndpointsConstant.PERGUNTA.PROXIMA_PERGUNTA, this.httpHelper.getHttpOptions());
  }

  responder(respostaDTO: RespostaDTO): Observable<PerguntaRespostaDTO> {
    return this.http.post<PerguntaRespostaDTO>(EndpointsConstant.PERGUNTA.PROXIMA_PERGUNTA, respostaDTO, this.httpHelper.getHttpOptions());
  }
}

