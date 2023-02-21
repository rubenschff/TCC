import { Component, Input, OnInit } from '@angular/core';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';

@Component({
  selector: 'ac-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.scss']
})
export class DadosFinanceirosComponent implements OnInit {

  @Input() comparacao!: ComparacaoModel;

  demoValue = 100;

  modelValorInicial = 0;
  modelTempo = 0;
  modelJuros = 0;
  modelValorFinal = 0;

  ngOnInit(): void {
    this.modelValorInicial = this.comparacao?.valorInicial ?? 0;
    this.modelTempo = this.comparacao?.tempo;
    this.modelJuros = this.comparacao?.juro;
    this.modelValorFinal = this.comparacao?.valorFinal();
  }

  formatterPercent(value: number): string {
    return `${value?.toFixed(2).toString().replace('.', ',')}% semana`;
  }
  parserPercent(value: string): string {
    return value?.replace('% semana', '');
  }

  formatterDollar(value: number): string {
    return `$ ${value?.toFixed(2).toString().replace('.', ',')}`;
  }
  parserDollar(value: string): string {
    return value?.replace('R$ ', '');
  }

  ajustarValorTotal() {
    this.modelValorFinal = this.comparacao.valorFinal();
  }
}
