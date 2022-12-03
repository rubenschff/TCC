import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { DateHelper } from '@static/helpers/date.helper';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioMock } from 'app/mocks/usuario.mocks';

@Component({
  selector: 'ac-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {
  @Output() readonly eventAbrirLogin = new EventEmitter<void>();
  @Output() readonly eventCadastro = new EventEmitter<UsuarioDTO>();

  inputEstadoEnum = InputEstadoEnum;
  inputTextTipoEnum = InputTextTipoEnum;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        nome: ['', Validators.compose([Validators.required])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        dataNascimento: ['', Validators.compose([Validators.required])]
    });
  }

  cadastrar() {
    let values = this.form.value;
    let data = DateHelper.getDateYYYYMMDDFormat(values.dataNascimento);

    let usuario = UsuarioMock.add(values.nome, data, values.senha);
    this.eventCadastro.emit(usuario);
  }
}
