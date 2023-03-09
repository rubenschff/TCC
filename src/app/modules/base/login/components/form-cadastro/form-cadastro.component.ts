import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { DateHelper } from '@static/helpers/date.helper';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioMock } from 'app/mocks/usuario.mocks';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ac-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {
  @Output() readonly eventAbrirLogin = new EventEmitter<void>();
  @Output() readonly eventCadastro = new EventEmitter<UsuarioDTO>();

  @ViewChild('popupCadastro') popupCadastro!: TemplateRef<void>;

  inputEstadoEnum = InputEstadoEnum;
  inputTextTipoEnum = InputTextTipoEnum;

  form!: FormGroup;

  modalRef!: NzModalRef;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        nome: ['', Validators.compose([Validators.required])],
        nickName:['', Validators.compose([Validators.required])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        dataNascimento: ['', Validators.compose([Validators.required])]
    });
  }

  cadastrar() {
    let usuario: UsuarioDTO = this.form.value;
    await usuario.dataNascimento = DateHelper.parseStringToDate(DateHelper.getDateYYYYMMDDFormat(usuario.dataNascimento));
    console.log(usuario);

    //let data = DateHelper.getDateYYYYMMDDFormat(values.dataNascimento);

    // let usuario = UsuarioMock.add(values.nome, data, values.senha);

    // this.abrirPopup(usuario);
  }

  abrirPopup(usuario: UsuarioDTO) {
    this.modalRef = this.modal.create({
      nzContent: this.popupCadastro,
      nzTitle: 'Cadastro criado!',
      nzWidth: 350,
      nzWrapClassName: `explicacao-popup`,
      nzMaskClosable: false,
      nzComponentParams: usuario,
      nzAfterClose: this.eventCadastro,
      nzOnCancel: () => {
        this.modalRef.close(usuario);
      },
      nzFooter: []
    });
  }
}
