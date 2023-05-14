import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ListaRespostaDTO } from '@static/models/pergunta/lista-resposta.dto';
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<ListaRespostaDTO>> {
    return this.http.get<Array<ListaRespostaDTO>>(EndpointsConstant.PERGUNTA.PERGUNTAS);
  }

  getNext(): Observable<PerguntaRespostaDTO> {
    return this.http.get<PerguntaRespostaDTO>(EndpointsConstant.PERGUNTA.PERGUNTAS);
  }
}

