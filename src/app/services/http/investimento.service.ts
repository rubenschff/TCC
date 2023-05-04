import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { HttpHelper } from '@static/helpers/http.helper';

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

}
