import { Component } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Cookie} from "@static/enumerators/cookie.enum";
import {RotasConstant} from "@static/constants/rotas.constant";
import {InicioService} from "../../../../services/inicio/inicio.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(
    private inicio: InicioService,
    private Cookie: CookieService,
    private router: Router,
    private cookieService: CookieService
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
