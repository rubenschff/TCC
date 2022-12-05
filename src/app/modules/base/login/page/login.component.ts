import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RotasConstant } from '@static/constants/rotas.constant';
import { StorageHelper } from '@static/helpers/storage.helper';
import { UsuarioDTO } from '@static/models/usuario/usuario.dto';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly URL_IMAGEM = '../../../../../assets/piggy_coin.png';

  mostrarLogin = true;

  constructor(
    private router: Router
  ) {}

  trocarLoginCadastro() {
    this.mostrarLogin = !this.mostrarLogin;
  }

  entrar(usuario: UsuarioDTO) {
    StorageHelper.setCodigoUsuario(usuario.id!);
    this.router.navigate([RotasConstant.INICIO]);
  }
}
