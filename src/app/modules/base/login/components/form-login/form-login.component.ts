import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioMock } from 'app/mocks/usuario.mocks';
import {LoginService} from "../../../../../services/login/login.service";
import {error} from "@ant-design/icons-angular";
import {CookieService} from "ngx-cookie-service";
import {Cookie} from "@static/enumerators/cookie.enum";

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
    private fb: FormBuilder,
    private loginService: LoginService,
    private  cookieService: CookieService,
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        nickname: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }

  login() {
    let values: UsuarioDTO = this.form.value;
    let login = this.loginService.login(values)

    login.subscribe(
      (data)=>{
        this.cookieService.set(Cookie.SESSION_ID,data.accessToken)
        this.eventLogin.emit(data);
      },
      (error)=>{
        if (error.status == 404){
          console.log('Usuario não encontrado');
        }else if(error.status == 401){
          console.log('Senha incorreta');
        }
      }
    )


  }
}
