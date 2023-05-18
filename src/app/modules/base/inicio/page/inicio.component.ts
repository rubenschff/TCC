import { Component } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {RotasConstant} from "@static/constants/rotas.constant";
import {Router} from "@angular/router";

@Component({
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {}
