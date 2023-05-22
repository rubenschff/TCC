import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, map} from "rxjs";
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

  todas(): Observable<Array<PerguntaRespostaDTO>> {
    return this.http.get<Array<PerguntaRespostaDTO>>(EndpointsConstant.PERGUNTA.PERGUNTAS, this.httpHelper.getHttpOptions());
  }

  get(codigoPergunta: number): Observable<PerguntaRespostaDTO> {
    const params = new HttpParams().set('pergunta', codigoPergunta);

    return this.http.get<Array<PerguntaRespostaDTO>>(EndpointsConstant.PERGUNTA.PERGUNTAS, this.httpHelper.getHttpOptions(params))
    .pipe(map(retorno => retorno[0]));
  }

  proximaPergunta(): Observable<PerguntaRespostaDTO> {
    return this.http.get<PerguntaRespostaDTO>(EndpointsConstant.PERGUNTA.PROXIMA_PERGUNTA, this.httpHelper.getHttpOptions());
  }

  responder(respostaDTO: RespostaDTO): Observable<PerguntaRespostaDTO> {
    return this.http.post<PerguntaRespostaDTO>(EndpointsConstant.PERGUNTA.RESPOSTA, respostaDTO, this.httpHelper.getHttpOptions());
  }
}

