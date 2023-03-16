import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";
import {PerguntaDTO} from "@static/models/pergunta/pergunta.dto";

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }
  getAll(): Observable<PerguntaDTO[]> {
    return this.http.get<PerguntaDTO[]>(this.apiUrl + '/perguntas');
  }
}

