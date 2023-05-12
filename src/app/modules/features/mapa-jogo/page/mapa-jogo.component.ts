import { Component } from '@angular/core';
import {InicioService} from "../../../../services/inicio/inicio.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Cookie} from "@static/enumerators/cookie.enum";
import {RotasConstant} from "@static/constants/rotas.constant";

@Component({
  selector: 'ac-mapa-jogo',
  templateUrl: './mapa-jogo.component.html',
  styleUrls: ['./mapa-jogo.component.scss']
})
export class MapaJogoComponent {

  readonly URL_ASTRONAUTA = './assets/astronauta-pose.png';

  constructor(
    private inicio: InicioService,
    private Cookie: CookieService,
    private router: Router,
  ) { }


  ngOnInit(){
    this.inicio.inicio().subscribe(inicio =>{
      console.log(inicio)
    },error =>{
      if (error.status == 401){
        this.Cookie.delete(Cookie.SESSION_ID)
        this.router.navigate([RotasConstant.LOGIN]);
      }
    })
  }
}
