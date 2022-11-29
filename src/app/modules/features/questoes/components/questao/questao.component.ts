import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ac-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent {

  readonly URL_DOLLAR_ASTRONAUTA = '../../../../../assets/dollar_astronauta.png';
  readonly URL_TERRA = '../../../../../assets/terra.png';
  readonly URL_LUA = '../../../../../assets/lua.png';

  radioValue = 1;

  @ViewChild('radiogroup', { static: true }) input?: ElementRef<HTMLInputElement>;

  constructor() {}
}
