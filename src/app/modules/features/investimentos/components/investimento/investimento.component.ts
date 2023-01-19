import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';

@Component({
  selector: 'ac-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent {

  @Input() investimento!: InvestimentoDTO;

  @Output() eventCardClick = new EventEmitter<InvestimentoDTO>();

  cardClick() {
    this.eventCardClick.emit(this.investimento);
  }
  gridStyle = {
    height: '100%',
    width: '100%',
    textAlign: 'center'
  };
}

