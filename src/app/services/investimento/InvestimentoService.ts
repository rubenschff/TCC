import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs";

export class InvestimentoService {
  private apiUrl = process.env['URL_API'];
  constructor(private http: HttpClient) { }
   getAll(): Observable<InvestimentoDTO[]> {
    return this.http.get<InvestimentoDTO[]>(this.apiUrl + '/investimento');
  }

}
