import { Component, OnInit } from '@angular/core';
import { ComparacaoModel } from '@static/models/investimento/comparacao.model';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';
import {InvestimentoService} from "../../../../services/investimento/investimento.service";

@Component({
  selector: 'ac-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.scss']
})
export class InvestimentosComponent implements OnInit {
  loading = false;
  investimentos?: InvestimentoDTO[];
  comparacoes = new Array<ComparacaoModel>();

  constructor(private investimentoService: InvestimentoService) {
    this.getAllInvestimentos()
  }

  ngOnInit(): void{
  }

  adicionarComparar(investimento: InvestimentoDTO) {
    this.comparacoes.push(new ComparacaoModel(investimento.descricao, 4, investimento.juro));
  }

  removerComparacao(comparacao: ComparacaoModel) {
    this.comparacoes.splice(this.comparacoes.indexOf(comparacao), 1);
  }
  getAllInvestimentos(): void{
    this.investimentoService.getAll().subscribe((investimentos:InvestimentoDTO[]) => {
      this.investimentos = investimentos;
    });

  }
}
