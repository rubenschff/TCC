import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ac-operar',
  templateUrl: './operar.component.html',
  styleUrls: ['./operar.component.scss']
})
export class OperarComponent implements OnInit {

  @Input() flagCompra!: boolean;
  @Input() investimento!: InvestimentoDTO;

  valor = 0;

  disponivel = 0;

  ngOnInit(): void {

    if (this.flagCompra) {
      this.disponivel = InvestimentoMock.findFinanceiro(StorageHelper.codigoUsuario).valorDisponivel;
    } else {
      this.disponivel = InvestimentoMock.findTotalizador(StorageHelper.codigoUsuario, this.investimento.id).valorAcumulado;
    }
  }
}
