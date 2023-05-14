import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import {Router} from "@angular/router";
import {RotasConstant} from "@static/constants/rotas.constant";
import {CookieService} from "ngx-cookie-service";
import { FinanceiroService } from 'app/services/http/financeiro.service';
import { CookieHelper } from '@static/helpers/cookie.helper';

interface Financeiro {
  arrecadado: number,
  acumulado: number,
  disponivel: number
}

@Component({
  selector: 'ac-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.scss']
})
export class DadosFinanceirosComponent implements OnInit {

   dadosFinanceiros: Financeiro = {
     arrecadado: 0,
     disponivel: 0,
     acumulado: 0
   }

  constructor (
    private modal: NzModalService,
    private financeiroService: FinanceiroService,
    private router: Router,
    private cookieHelper: CookieHelper
  ) {}

  ngOnInit(): void {
    this.financeiroService.financeiroById().subscribe({
      next: financeiro => {
        this.dadosFinanceiros.arrecadado = financeiro.arrecadado == undefined ? 0 : financeiro.arrecadado;
        this.dadosFinanceiros.acumulado = financeiro.acumulado == undefined ? 0 : financeiro.acumulado;
        this.dadosFinanceiros.disponivel = financeiro.disponivel == undefined ? 0 : financeiro.disponivel
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
