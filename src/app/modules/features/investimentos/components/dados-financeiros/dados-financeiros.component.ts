import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import {Router} from "@angular/router";
import {RotasConstant} from "@static/constants/rotas.constant";
import { FinanceiroService } from 'app/services/http/financeiro.service';
import { CookieHelper } from '@static/helpers/cookie.helper';
import { DadosFinanceirosService } from 'app/services/dados-financeiros.service';

export let valorDisponivel = 0;

@Component({
  selector: 'ac-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.scss']
})
export class DadosFinanceirosComponent implements OnInit {

  arrecadado = 0;
  disponivel = 0;
  acumulado = 0;

  constructor(private dadosFinanceirosService: DadosFinanceirosService) {}

  ngOnInit(): void {
    this.subscribeEvents();

    this.dadosFinanceirosService.atualizarFinanceiro();
  }

  subscribeEvents() {
    this.dadosFinanceirosService.acumulado.subscribe({
      next: acumulado => this.acumulado = acumulado
    });

    this.dadosFinanceirosService.arrecadado.subscribe({
      next: arrecadado => this.arrecadado = arrecadado
    });

    this.dadosFinanceirosService.disponivel.subscribe({
      next: disponivel => {
        this.disponivel = disponivel;
        valorDisponivel = disponivel;
      }
    });
  }
}
