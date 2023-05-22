import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SituacaoPerguntaEnum } from '@static/enumerators/situacao-pergunta.enum';
import { PerguntaDTO } from '@static/models/pergunta/pergunta.dto';
import { PerguntaService } from 'app/services/http/pergunta.service';

@Component({
  selector: 'ac-lista-questoes',
  templateUrl: './lista-questoes.component.html',
  styleUrls: ['./lista-questoes.component.scss']
})
export class ListaQuestoesComponent implements OnInit {

  @Output() eventPerguntaClick = new EventEmitter<number>();

  listaRespostas!: Array<PerguntaDTO>;

  situacaoPerguntaEnum = SituacaoPerguntaEnum;

  constructor(private perguntaService: PerguntaService) {}

  ngOnInit(): void {
    this.perguntaService.todas().subscribe({
      next: listaPerguntaRespostas => {
        debugger
        this.listaRespostas = listaPerguntaRespostas.map(x => x.pergunta);
      }
    });
  }

  clickPergunta(codigoPergunta: number) {
    this.eventPerguntaClick.emit(codigoPergunta);
  }
}
