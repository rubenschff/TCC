import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent implements OnInit {

  visivelPerguntas = true;

  ngOnInit(): void {
    this.visivelPerguntas = true;
  }

  clickPergunta(numero: number) {
    this.visivelPerguntas = false;
  }
}
