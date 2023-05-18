import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SituacaoPerguntaEnum } from '@static/enumerators/situacao-pergunta.enum';
import { ListaRespostaDTO } from '@static/models/pergunta/lista-resposta.dto';
import { PerguntaService } from 'app/services/http/pergunta.service';

@Component({
  selector: 'ac-lista-questoes',
  templateUrl: './lista-questoes.component.html',
  styleUrls: ['./lista-questoes.component.scss']
})
export class ListaQuestoesComponent implements OnInit {

  @Output() eventPerguntaClick = new EventEmitter<number>();

  listaRespostas!: Array<ListaRespostaDTO>;

  situacaoPerguntaEnum = SituacaoPerguntaEnum;

  constructor(private perguntaService: PerguntaService) {}

  ngOnInit(): void {
    this.perguntaService.getAll().subscribe({
      next: listaRespostas => this.listaRespostas = listaRespostas
    });
  }

  clickPergunta(codigoPergunta: number) {
    this.eventPerguntaClick.emit(codigoPergunta);
  }
}
