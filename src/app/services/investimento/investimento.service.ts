import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestimentoDTO} from "@static/models/investimento/investimento.dto";

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  private apiUrl = 'http://localhost:5050';
  constructor(private http: HttpClient) { }
  getAll(): Observable<InvestimentoDTO[]> {
    return this.http.get<InvestimentoDTO[]>(this.apiUrl + '/investimento');
  }

}
