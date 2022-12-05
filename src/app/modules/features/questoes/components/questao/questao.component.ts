import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { AlternativaDTO } from '@static/models/pergunta/alternativa.dto';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';
import { PerguntaMock } from 'app/mocks/pergunta.mocks';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ExplicacaoPopupComponent } from '../explicacao-popup/explicacao-popup.component';

@Component({
  selector: 'ac-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  readonly URL_DOLLAR_ASTRONAUTA = '../../../../../assets/dollar_astronauta.png';
  readonly URL_TERRA = '../../../../../assets/terra.png';
  readonly URL_LUA = '../../../../../assets/lua.png';

  alternativaSelecionada = 0;
  desabilitarResponder = true;
  desabilitarProximo = true;

  desabilitarAlternativa: Array<number> = [];

  perguntaResposta!: PerguntaRespostaDTO;

  @ViewChild('radiogroup', { static: true }) input?: ElementRef<HTMLInputElement>;

  constructor(
    private modal: NzModalService) {}

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar() {
    this.perguntaResposta = PerguntaMock.find(StorageHelper.codigoUsuario);
  }

  changeAlternativa() {
    if (this.desabilitarResponder) {
      this.desabilitarResponder = false;
    } else if (this.alternativaSelecionada == 0) {
      this.desabilitarResponder = true;
    }
  }

  responder() {
    let pergunta = this.perguntaResposta.pergunta;
    let alternativa = pergunta.alternativas.find(x => x.id == this.alternativaSelecionada)!;

    let respostaCerta = pergunta.alternativaCorreta == alternativa.id;

    if (respostaCerta) {
      this.desabilitarAlternativa = pergunta.alternativas.map(x => x.id);
      this.desabilitarProximo = false;
      this.desabilitarResponder = true;
    } else {
      this.desabilitarAlternativa.push(this.alternativaSelecionada);
      this.alternativaSelecionada = 0;
      this.changeAlternativa();
    }

    this.abrirPopup(alternativa);
  }

  abrirPopup(alternativa: AlternativaDTO) {
    let respostaCerta = this.perguntaResposta.pergunta.alternativaCorreta == alternativa.id;
    let classe = respostaCerta ? 'acertou' : 'errou';

    this.modal.create({
      nzContent: ExplicacaoPopupComponent,
      nzTitle: respostaCerta ? 'Você acertou!' : 'Não foi dessa vez...',
      nzWidth: 400,
      nzWrapClassName: `explicacao-popup ${classe}`,
      nzMaskClosable: false,
      nzComponentParams: {
        explicacao: alternativa?.explicacao,
        img: respostaCerta ? './assets/dollar_astronauta.png' : './assets/dollar_astronauta.png',
      },
      nzFooter: []
    });
  }
}
