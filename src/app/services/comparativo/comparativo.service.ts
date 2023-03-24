import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {Observable} from "rxjs";
import {ComparativoDTO} from "@static/models/comparativo/comparativo.dto";

@Injectable({
  providedIn: 'root'
})
export class ComparativoService {

  private urlApi = environment.api_url;
  constructor(private http: HttpClient) { }


  getComparativos(userId: number):Observable<ComparativoDTO>{
    return this.http.get<ComparativoDTO>(this.urlApi+'/comparativo/'+userId)
  }

  create(userId: number){
    return this.http.post(this.urlApi + '/comparativo', {usuarioId: userId})
  }
}
