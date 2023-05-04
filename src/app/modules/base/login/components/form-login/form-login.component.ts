import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import { UsuarioService } from 'app/services/http/usuario.service';
import { LoginDTO } from '@static/models/usuario/login.dto';
import { CookieHelper } from '@static/helpers/cookie.helper';

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
    private usuarioService: UsuarioService,
    private cookieHelper: CookieHelper
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
        nickName: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }

  login() {
    let loginDTO: LoginDTO = this.form.value;

    this.usuarioService.login(loginDTO).subscribe({
      next: (data) => {
        this.cookieHelper.sessionId = data.accessToken;
        this.eventLogin.emit(data);
      },
      error: (error) => {
        if (error.status == 404){
          console.log('Usuario não encontrado');
        }else if(error.status == 401){
          console.log('Senha incorreta');
        }
      }
    });
  }
}
