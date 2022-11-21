import { Component } from '@angular/core';

@Component({
  selector: 'ac-mapa-jogo',
  templateUrl: './mapa-jogo.component.html',
  styleUrls: ['./mapa-jogo.component.scss']
})
export class MapaJogoComponent {

  readonly URL_INVESTIMENTO = '../../../../../assets/investimento.png';
  readonly URL_HISTORICO = '../../../../../assets/historico.png';
  readonly URL_QUESTOES = '../../../../../assets/questoes.png';
  readonly URL_COIN = '../../../../../assets/coins.png';

  constructor() {}
}
