import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RotasConstant } from '@static/constants/rotas.constant';
import { CookieHelper } from '@static/helpers/cookie.helper';


@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly NAVBAR_INICIO = 'Inicio';
  readonly NAVBAR_PERGUNTAS = 'Responda para ganhar moedas';
  readonly NAVBAR_INVESTIMENTO = 'Invista moedas para ter mais';
  readonly NAVBAR_USUARIO = 'Conta';
  readonly NAVBAR_SAIR = 'Sair';

  listaItensNavBar = [this.NAVBAR_INICIO, this.NAVBAR_PERGUNTAS, this.NAVBAR_INVESTIMENTO, this.NAVBAR_USUARIO, this.NAVBAR_SAIR];

  indexNavBarSelecionado = 0;

  constructor(
    private router: Router,
    private cookieHelper: CookieHelper
    ) {}

  ngOnInit(): void {
    this.clickItemNavBar(this.indexNavBarSelecionado);
  }

  clickItemNavBar(index: number) {

    switch (index) {
      case 0: {
        this.router.navigate([`${RotasConstant.INICIO}`]);
        break;
      }
      case 1: {
        this.router.navigate([`${RotasConstant.INICIO}/${RotasConstant.QUESTOES}`]);
        break;
      }
      case 2: {
        this.router.navigate([`${RotasConstant.INICIO}/${RotasConstant.INVESTIMENTOS}`]);
        break;
      }
      case 3: {
        this.router.navigate([`${RotasConstant.INICIO}/${RotasConstant.CONTA}`]);
        break;
      }
      case 4:
        this.cookieHelper.removeSessionId();
        this.router.navigate([RotasConstant.LOGIN]);
        break
    }
  }
}
