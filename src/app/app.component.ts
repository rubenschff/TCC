import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { fadeAnimation } from './animation';
import { LoaderService } from '@core/services/loader.service';
import {InicioService} from "./services/inicio/inicio.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation]
})
export class AppComponent implements AfterContentChecked {
  constructor(public loaderService: LoaderService, private cdref: ChangeDetectorRef, private inicio: InicioService,private Cookie: CookieService,private router: Router) {}



  ngAfterContentChecked() {
      this.cdref.detectChanges();
  }
}
