import { Component, EventEmitter, Output } from '@angular/core';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';

@Component({
  selector: 'ac-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {

  inputEstadoEnum = InputEstadoEnum;

  @Output() readonly eventAbrirLogin = new EventEmitter<void>();
  constructor(
  ) {}
}
