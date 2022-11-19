import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly URL_IMAGEM = '../../../../../assets/piggy_coin.png';

  mostrarLogin = true;

  constructor(
  ) {}

  trocarLoginCadastro() {
    this.mostrarLogin = !this.mostrarLogin;
  }
}
