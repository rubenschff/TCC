import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { AlternativaDTO } from '@static/models/pergunta/alternativa.dto';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';
import { PerguntaMock } from 'app/mocks/pergunta.mocks';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ExplicacaoPopupComponent } from '../explicacao-popup/explicacao-popup.component';
import { PerguntaService } from 'app/services/http/pergunta.service';
import { PerguntaDTO } from '@static/models/pergunta/pergunta.dto';
import { DadosFinanceirosService } from 'app/services/dados-financeiros.service';

@Component({
  selector: 'ac-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  @Input() codigoPergunta?: number;
  @Output() eventHistoricoClick = new EventEmitter<void>();

  readonly URL_COMETA = './assets/cometa.png';
  readonly URL_DOLLAR_ASTRONAUTA = './assets/dollar_astronauta.png';
  readonly URL_TERRA = './assets/terra.png';
  readonly URL_LUA = './assets/lua.png';

  alternativaSelecionada = 0;
  desabilitarResponder = true;
  desabilitarProximo = true;

  desabilitarAlternativa: Array<number> = [];

  perguntaResposta?: PerguntaRespostaDTO;

  constructor(
    private modal: NzModalService,
    private perguntaService: PerguntaService,
    private dadosFinanceirosService: DadosFinanceirosService) {}

  ngOnInit(): void {
    if (this.codigoPergunta) {
      this.perguntaService.get(this.codigoPergunta).subscribe({
        next: this.processarPerguntaResposta,
        error: error => console.log(error)
      });
    } else {
      this.atualizar();
    }
  }

  atualizar() {
    this.perguntaService.proximaPergunta().subscribe({
      next: this.processarPerguntaResposta,
      error: error => console.log(error)
    });
  }

  processarPerguntaResposta = (perguntaResposta: PerguntaRespostaDTO) => {
    this.perguntaResposta = perguntaResposta;
    this.desabilitarAlternativa = this.perguntaResposta.respostas.map(x => x.idAlternativa);
    let pergunta = this.perguntaResposta.pergunta;

    if (this.desabilitarAlternativa.includes(pergunta.alternativaCorreta)) {
      this.alternativaSelecionada = pergunta.alternativaCorreta;
      this.desabilitarAlternativa = pergunta.alternativas.map(x => x.id);
    } else {
      this.alternativaSelecionada = 0;
      this.desabilitarResponder = true;
      this.desabilitarProximo = true;
    }
  }

  changeAlternativa() {
    if (this.desabilitarResponder) {
      this.desabilitarResponder = false;
    } else if (this.alternativaSelecionada == 0) {
      this.desabilitarResponder = true;
    }
  }

  responder() {
    let pergunta = this.perguntaResposta!.pergunta;
    let alternativa = pergunta!.alternativas.find(x => x.id == this.alternativaSelecionada)!;

    let respostaCerta = pergunta!.alternativaCorreta == alternativa.id;


    this.perguntaService.responder({ idPergunta: pergunta.id, idAlternativa: alternativa.id }).subscribe({
      next: perguntaResposta => {
        if (respostaCerta) {
          this.desabilitarAlternativa = pergunta!.alternativas.map(x => x.id);
          this.desabilitarProximo = false;
          this.desabilitarResponder = true;
          this.dadosFinanceirosService.atualizarFinanceiro();
        } else {
          this.processarPerguntaResposta(perguntaResposta);
          this.desabilitarAlternativa.push(this.alternativaSelecionada);
          this.alternativaSelecionada = 0;
          this.changeAlternativa();
        }

        this.abrirPopup(alternativa);
      },
      error: error => console.log(error)
    });
  }

  abrirPopup(alternativa: AlternativaDTO) {
    let respostaCerta = this.perguntaResposta!.pergunta.alternativaCorreta == alternativa.id;
    let classe = respostaCerta ? 'acertou' : 'errou';

    this.modal.create({
      nzContent: ExplicacaoPopupComponent,
      nzTitle: respostaCerta ? 'Você acertou!' : 'Não foi dessa vez...',
      nzWidth: 400,
      nzWrapClassName: `explicacao-popup ${classe}`,
      nzMaskClosable: false,
      nzComponentParams: {
        explicacao: alternativa?.explicacao,
        img: alternativa.imagem,
      },
      nzFooter: []
    });
  }
}
