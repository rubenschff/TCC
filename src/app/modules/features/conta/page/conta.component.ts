import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { DateHelper } from '@static/helpers/date.helper';
import { StorageHelper } from '@static/helpers/storage.helper';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioMock } from 'app/mocks/usuario.mocks';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'ac-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  readonly URL_SATURNO = './assets/saturno.png';
  readonly URL_JUPITER = './assets/jupiter.png'
  readonly URL_MARTE = './assets/marte.png'
  readonly URL_PLUTAO = './assets/plutão.png'

  inputEstadoEnum = InputEstadoEnum;
  inputTextTipoEnum = InputTextTipoEnum;



  nome!: string;
  senha!: string;
  token!: number;
  dataNascimento!: Date;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    let usuario = UsuarioMock.find(StorageHelper.codigoUsuario)!;

    this.nome = usuario.nome;
    this.senha = usuario.senha;
    this.token = usuario.token!;
    this.dataNascimento = DateHelper.parseStringToDate(usuario.dataNascimento);

    this.form = this.fb.group({
        nome: [this.nome, Validators.compose([Validators.required])],
        dataNascimento: [this.dataNascimento, Validators.compose([Validators.required])],
        senha: [this.senha, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }



  alterar() {
    let values = this.form.value;
    let data = DateHelper.getDateYYYYMMDDFormat(values.dataNascimento);

    UsuarioMock.add(values.nome, data, values.senha, StorageHelper.codigoUsuario);

    this.message.success(`Alteração realizada com sucesso!`);
  }

}