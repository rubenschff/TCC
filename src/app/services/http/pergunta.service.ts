import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";
import {PerguntaDTO} from "@static/models/pergunta/pergunta.dto";
import { ListaRespostaDTO } from '@static/models/pergunta/lista-resposta.dto';
import { EndpointsConstant } from '@static/constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<ListaRespostaDTO>> {
    return this.http.get<Array<ListaRespostaDTO>>(EndpointsConstant.PERGUNTA.PERGUNTAS);
  }
}

