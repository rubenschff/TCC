import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { HttpHelper } from '@static/helpers/http.helper';
import { FinanceiroDTO } from '@static/models/investimento/financeiro.dto';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelper
  ) { }

  financeiroById(): Observable<FinanceiroDTO> {
    return this.http.get<FinanceiroDTO>(EndpointsConstant.INVESTIMENTO.FINANCEIRO, this.httpHelper.getHttpOptions());
  }
}
