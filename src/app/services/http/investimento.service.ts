import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, find, toArray} from "rxjs";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { HttpHelper } from '@static/helpers/http.helper';
import { TransacaoDTO } from '@static/models/investimento/transacao.dto';
import { TransacaoTotalizadorDTO } from '@static/models/investimento/transacao-totalizador.dto';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  constructor(
    private http: HttpClient,
    private utilHelper: HttpHelper
  ) {}

  getAll(): Observable<Array<InvestimentoDTO>> {
    return this.http.get<Array<InvestimentoDTO>>(EndpointsConstant.INVESTIMENTO.INVESTIMENTO, this.utilHelper.getHttpOptions());
  }

  operar(transacao: TransacaoDTO) {
    return this.http.post(EndpointsConstant.INVESTIMENTO.TRANSACAO, transacao, this.utilHelper.getHttpOptions());
  }

  totalizadorInvestimento(codigoInvestimento: number): Observable<TransacaoTotalizadorDTO> {
    const params = new HttpParams().set('investimento', codigoInvestimento);

    return this.http
      .get<TransacaoTotalizadorDTO>(EndpointsConstant.INVESTIMENTO.TOTALIZADOR, this.utilHelper.getHttpOptions(params));
  }

}
