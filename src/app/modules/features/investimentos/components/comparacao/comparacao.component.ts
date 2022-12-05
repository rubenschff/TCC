import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';

@Component({
  selector: 'ac-comparacao',
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.scss']
})
export class ComparacaoComponent {

  @Input() comparacao!: ComparacaoModel;
  @Output() eventCloseClick = new EventEmitter<ComparacaoModel>();

  demoValue = 100;

  modelValorInicial = 0;
  modelTempo = 0;
  modelJuros = 0;
  modelValorFinal = 0;

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

  clickClose() {
    this.eventCloseClick.emit(this.comparacao);
  }
}
