import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { fadeAnimation } from './animation';
import { LoaderService } from '@core/services/loader.service';
import {InicioService} from "./services/inicio/inicio.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {RotasConstant} from "@static/constants/rotas.constant";
import {Cookie} from "@static/enumerators/cookie.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation]
})
export class AppComponent implements AfterContentChecked {
  constructor(public loaderService: LoaderService, private cdref: ChangeDetectorRef, private inicio: InicioService,private Cookie: CookieService,private router: Router) {}

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

  ngAfterContentChecked() {
      this.cdref.detectChanges();
  }
}
