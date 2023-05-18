import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FinanceiroService } from './http/financeiro.service';
import { Router } from '@angular/router';
import { CookieHelper } from '@static/helpers/cookie.helper';
import { RotasConstant } from '@static/constants/rotas.constant';

@Injectable({
  providedIn: 'root'
})
export class DadosFinanceirosService {

  arrecadadoEvent = new Subject<number>();
  acumuladoEvent = new Subject<number>();
  disponivelEvent = new Subject<number>();

  constructor(
    private router: Router,
    private cookieHelper: CookieHelper,
    private financeiroService: FinanceiroService
  ) {}

  get arrecadado(): Observable<number> {
    return this.arrecadadoEvent.asObservable();
  }

  get acumulado(): Observable<number> {
    return this.acumuladoEvent.asObservable();
  }

  get disponivel(): Observable<number> {
    return this.disponivelEvent.asObservable();
  }


  atualizarFinanceiro() {
    this.financeiroService.financeiroById().subscribe({
      next: financeiro => {
        this.arrecadadoEvent.next(financeiro.arrecadado ? financeiro.arrecadado : 0);
        this.acumuladoEvent.next(financeiro.acumulado ? financeiro.acumulado : 0);
        this.disponivelEvent.next(financeiro.disponivel ? financeiro.disponivel : 0);
      },
      error: error => {
        if (error.status == 401) {
          this.cookieHelper.removeSessionId();
          this.router.navigate([RotasConstant.LOGIN]);
        }
      }
    });
  }
}
