import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {CookieService} from "ngx-cookie-service";
import {ComparativoService} from "../../../../../services/comparativo/comparativo.service";
import {Cookie} from "@static/enumerators/cookie.enum";
import { UsuarioService } from 'app/services/usuario.service';
import { CadastroDTO } from '@static/models/usuario/cadastro.dto';

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
    private cookieService: CookieService,
    private usuarioService: UsuarioService,
    private comparativoService: ComparativoService,
    private fb: FormBuilder,
    private modal: NzModalService
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        name: ['', Validators.compose([Validators.required])],
        nickName:['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        dateOfBirth: ['', Validators.compose([Validators.required])]
    });
  }

  cadastrar() {
    const cadastroDTO: CadastroDTO = this.form.value;

    this.usuarioService.cadastro(cadastroDTO).subscribe(
      {
        next: (response) => {
          console.log(response);
          const comparativo = this.comparativoService.create(response.id!)

          comparativo.subscribe((response)=>{
            console.log('Comparativo criado!')
          },(error)=>{
            return error.message
          })

          const usuario:number = response.id!
          this.cookieService.set(Cookie.SESSION_ID, response.accessToken); //ToDo passar o id e token para o cookie


          this.abrirPopup({...response, id: parseInt(this.cookieService.get('userId'))});
        },
        error: (error) => {
          console.log(error.message)
          if (error.status == 401){
            console.log("Usuário ja cadastrado")
            return error.message
          }
        }
      }
    )
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
