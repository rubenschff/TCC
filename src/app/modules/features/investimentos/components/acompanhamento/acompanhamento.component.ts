import { Component, Input, OnInit } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';
import { FinanceiroDTO } from '@static/models/investimento/financeiro.dto';
import { TransacaoTotalizadorDTO } from '@static/models/investimento/transacao-totalizador.dto';

@Component({
  selector: 'ac-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {

  @Input() codigoInvestimento!: number;

  totalizador!: TransacaoTotalizadorDTO;

  ngOnInit(): void {
    //this.totalizador = InvestimentoMock.findTotalizador(StorageHelper.codigoUsuario, this.codigoInvestimento);
  }
}
