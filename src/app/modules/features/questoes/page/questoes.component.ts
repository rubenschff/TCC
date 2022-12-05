import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent implements OnInit {

  visivelPerguntas!: boolean;

  codigoPergunta?: number;

  ngOnInit(): void {
    this.visivelPerguntas = false;
  }

  trocarVisualizacao() {
    this.visivelPerguntas = !this.visivelPerguntas;
  }
}
