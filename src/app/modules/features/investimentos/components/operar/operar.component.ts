import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { valorDisponivel } from '../dados-financeiros/dados-financeiros.component';
import { MathHelper } from '@static/helpers/math.helper';

@Component({
  selector: 'ac-operar',
  templateUrl: './operar.component.html',
  styleUrls: ['./operar.component.scss']
})
export class OperarComponent implements OnInit {

  @Input() flagCompra!: boolean;
  @Input() investimento!: InvestimentoDTO;

  formatMoeda = MathHelper.formatMoeda;
  parseMoeda = MathHelper.parseMoeda;

  valor = 0;

  disponivel = 0;

  ngOnInit(): void {
    if (this.flagCompra) {
      this.disponivel = valorDisponivel;
    } else {
      this.disponivel = this.investimento.totalizador.valorAcumulado;
    }
  }
}
