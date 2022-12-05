import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SituacaoPerguntaEnum } from '@static/enumerators/situacao-pergunta.enum';
import { StorageHelper } from '@static/helpers/storage.helper';
import { ListaRespostaDTO } from '@static/models/pergunta/lista-resposta.dto';
import { PerguntaMock } from 'app/mocks/pergunta.mocks';

@Component({
  selector: 'ac-lista-questoes',
  templateUrl: './lista-questoes.component.html',
  styleUrls: ['./lista-questoes.component.scss']
})
export class ListaQuestoesComponent implements OnInit {

  @Output() eventPerguntaClick = new EventEmitter<number>();

  listaRespostas!: Array<ListaRespostaDTO>;

  situacaoPerguntaEnum = SituacaoPerguntaEnum;

  ngOnInit(): void {
    this.listaRespostas = PerguntaMock.findAll(StorageHelper.codigoUsuario);
  }

  clickPergunta(codigoPergunta: number) {
    this.eventPerguntaClick.emit(codigoPergunta);
  }
}
