import { Component, Input, OnInit } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';
import { FinanceiroDTO } from '@static/models/investimento/financeiro.dto';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';

@Component({
  selector: 'ac-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.scss']
})
export class DadosFinanceirosComponent implements OnInit {

  dadosFinanceiros!: FinanceiroDTO;

  ngOnInit(): void {
    this.dadosFinanceiros = InvestimentoMock.findFinanceiro(StorageHelper.codigoUsuario);
  }
}
