import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import {FinanceiroService} from "../../../../../services/financeiro/financeiro.service";
import {Router} from "@angular/router";
import {Cookie} from "@static/enumerators/cookie.enum";
import {RotasConstant} from "@static/constants/rotas.constant";
import {CookieService} from "ngx-cookie-service";

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

  constructor(
    private modal: NzModalService,
    private FinanceiroService: FinanceiroService,
    private router: Router,
    private Cookie: CookieService
  ) {}

  ngOnInit(): void {

    let dadosFinanceiros = this.FinanceiroService.financeiroById()

    dadosFinanceiros.subscribe(financeiro =>{
      this.dadosFinanceiros.arrecadado = financeiro.arrecadado == undefined ? 0 : financeiro.arrecadado;
      this.dadosFinanceiros.acumulado = financeiro.acumulado == undefined ? 0 : financeiro.acumulado;
      this.dadosFinanceiros.disponivel = financeiro.disponivel == undefined ? 0 : financeiro.disponivel
    },error => {
      if (error.status == 401){
        this.Cookie.delete(Cookie.SESSION_ID)
        this.router.navigate([RotasConstant.LOGIN]);
      }
    })


  }
}
