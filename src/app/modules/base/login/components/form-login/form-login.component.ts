import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioMock } from 'app/mocks/usuario.mocks';

@Component({
  selector: 'ac-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @Output() readonly eventAbrirCadastro = new EventEmitter<void>();
  @Output() readonly eventLogin = new EventEmitter<UsuarioDTO>();

  inputEstadoEnum = InputEstadoEnum;
  inputTextTipoEnum = InputTextTipoEnum;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        token: ['', Validators.compose([Validators.required])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }

  login() {
    let value = this.form.value;
    let usuario = UsuarioMock.login(parseInt(value.token, 10), value.senha);

    this.eventLogin.emit(usuario);
  }
}
