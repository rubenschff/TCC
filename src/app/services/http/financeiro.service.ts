import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { EndpointsConstant } from '@static/constants/endpoints.constant';
import { HttpHelper } from '@static/helpers/http.helper';


interface Financeiro {
  arrecadado: number,
  acumulado: number,
  disponivel: number
}
@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(
    private http: HttpClient,
    private utilHelper: HttpHelper
  ) { }


  financeiroById(): Observable<Financeiro> {
    return this.http.get<Financeiro>(EndpointsConstant.INVESTIMENTO.FINANCEIRO, this.utilHelper.getHttpOptions());
  }
}
