import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';
import { MathHelper } from '@static/helpers/math.helper';
import { de } from 'date-fns/locale';

@Component({
  selector: 'ac-comparacao',
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.scss']
})

export class ComparacaoComponent {

  @Input() comparacao!: ComparacaoModel;
  @Output() eventCloseClick = new EventEmitter<ComparacaoModel>();

  formatMoeda = MathHelper.formatMoeda;
  formatPorcentagem = MathHelper.formatPorcentagem;
  parseMoeda = MathHelper.parseMoeda;
  parsePorcentagem = MathHelper.parsePorcentagem;

  demoValue = 100;

  modelValorInicial = 0;
  modelTempo = 0;
  modelJuros = 0;
  modelValorFinal = 0;

  ajustarValorTotal() {
    this.modelValorFinal = this.comparacao.valorFinal();
  }

  clickClose() {
    this.eventCloseClick.emit(this.comparacao);
  }
}
