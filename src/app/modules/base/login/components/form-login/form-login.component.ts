import { Component, EventEmitter, Output } from '@angular/core';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';

@Component({
  selector: 'ac-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  inputEstadoEnum = InputEstadoEnum;

  @Output() readonly eventAbrirCadastro = new EventEmitter<void>();
  constructor(
  ) {}
}
