import { Component } from '@angular/core';
import {InicioService} from "../../../../services/inicio/inicio.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Cookie} from "@static/enumerators/cookie.enum";
import {RotasConstant} from "@static/constants/rotas.constant";

@Component({
  selector: 'ac-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  readonly URL_ASTRONAUTA = './assets/astronauta-pose.png';
<<<<<<< HEAD:src/app/modules/features/mapa-jogo/page/mapa-jogo.component.ts

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
=======
>>>>>>> correcoes-front:src/app/modules/features/inicio/page/inicio.component.ts
}
