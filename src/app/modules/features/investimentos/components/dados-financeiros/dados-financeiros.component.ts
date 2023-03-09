import { Component, Input, OnInit } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import {FinanceiroDTO} from "@static/models/investimento/financeiro.dto";

@Component({
  selector: 'ac-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.scss']
})
export class DadosFinanceirosComponent implements OnInit {

  dadosFinanceiros!: FinanceiroDTO;

  constructor(
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    // this.modelValorInicial = this.comparacao?.valorInicial ?? 0;
    // this.modelTempo = this.comparacao?.tempo;
    // this.modelJuros = this.comparacao?.juro;
    // this.modelValorFinal = this.comparacao?.valorFinal();
    this.dadosFinanceiros = InvestimentoMock.findFinanceiro(StorageHelper.codigoUsuario);
  }
}
