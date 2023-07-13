import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ImageHelper {

  constructor() {}

  static certas = ['./assets/astronauta-pose.png', './assets/astronauta-saco-dinheiro.png', './assets/astronauta-cofre.png']

  static erradas = ['./assets/astronauta-confuso2.png', './assets/astronauta-explicando.png',
    './assets/astronauta-planeta.png', './assets/astronauta-baloes.png']

  static urlImagemAcertouErrou(acertou: boolean): string {
    return acertou ? this.certas[Math.floor(Math.random() * 3)] : this.erradas[Math.floor(Math.random() * 4)];
  }
}
