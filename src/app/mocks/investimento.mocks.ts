import { DateHelper } from '@static/helpers/date.helper';
import { FinanceiroDTO } from '@static/models/investimento/financeiro.dto';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { TransacaoTotalizadorDTO } from '@static/models/investimento/transacao-totalizador.dto';
import { TransacaoDTO } from '@static/models/investimento/transacao.dto';

export class InvestimentoMock {

  static financeiro = new Array<FinanceiroDTO>;
  static transacao = new Array<TransacaoDTO>;
  static transacaoTotalizador = new Array<TransacaoTotalizadorDTO>;

  static getAll(): Array<InvestimentoDTO> {

    let poupanca: InvestimentoDTO = {
      id: 1,
      descricao: 'Poupança',
      risco: 10,
      juro: 2.5,
      liquidez: 0,
      imagem: './assets/piggy-bank.png'
    }

    let tesouroDireto: InvestimentoDTO = {
      id: 2,
      descricao: 'Tesouro Direto',
      risco: 0.5,
      juro: 6.0,
      liquidez: 1,
      imagem: './assets/capitol.png'
    }

    let cdb: InvestimentoDTO = {
      id: 3,
      descricao: 'CDB',
      risco: 0.5,
      juro: 8.4,
      liquidez: 14,
      imagem: './assets/bank.png'
    }

    return [poupanca, tesouroDireto, cdb];
  }

  static findInvestimento(id: number, validar = true): InvestimentoDTO {
    let retorno = this.getAll().find(x => x.id == id);

    if (validar && !retorno) {
      throw Error("Investimento não Encontrado!");
    }

    return retorno!;
  }

  static findFinanceiro(codigoUsuario: number): FinanceiroDTO {
    let retorno = this.financeiro.find(x => x.codigoUsuario == codigoUsuario);

    if (!retorno) {
      retorno = {
        codigoUsuario,
        valorDisponivel: 0,
        valorArrecadado: 0,
        valorAcumulado: 0,
        dataManutencao: DateHelper.formatDateTime(new Date())
      }
    }

    return retorno;
  }

  static addValor(codigoUsuario: number, valor: number) {
    let financeiro = this.financeiro.find(x => x.codigoUsuario == codigoUsuario);

    if (financeiro) {
      financeiro.valorArrecadado += valor;
      financeiro.valorDisponivel += valor;
    } else {
      financeiro = {
        id: this.financeiro.length + 1,
        codigoUsuario,
        valorDisponivel: valor,
        valorArrecadado: valor,
        valorAcumulado: 0,
        dataManutencao: DateHelper.formatDateTime(new Date())
      }

      this.financeiro.push(financeiro);
    }
  }

  static operar(codigoUsuario: number, codigoInvestimento: number, valor: number, flagCompra: boolean) {
    let dataAtual = DateHelper.formatDateTime(new Date());

    this.transacao.push({
      id: this.transacao.length + 1,
      codigoUsuario,
      codigoInvestimento,
      valor,
      flagCompra,
      dataCadastro: dataAtual
    });

    let financeiro = this.financeiro.find(x => x.codigoUsuario == codigoUsuario)!;

    if (flagCompra) {
      financeiro.valorAcumulado += valor;
      financeiro.valorDisponivel -= valor;
    } else {
      financeiro.valorAcumulado -= valor;
      financeiro.valorDisponivel += valor;
    }

    let totalizador = this.findTotalizador(codigoUsuario, codigoInvestimento, dataAtual);

    totalizador.dataManutencao = dataAtual;
    if (flagCompra) {
      totalizador.valorInicial += valor;
      totalizador.valorAcumulado += valor;
    } else {
      totalizador.valorInicial -= valor;
      totalizador.valorAcumulado -= valor;
    }
  }

  static findTotalizador(codigoUsuario: number, codigoInvestimento: number, dataAtual?: string): TransacaoTotalizadorDTO {
    let totalizador = this.transacaoTotalizador
      .find(x => x.codigoUsuario == codigoUsuario && x.codigoInvestimento == codigoInvestimento);

    if (!dataAtual) {
      dataAtual = DateHelper.formatDateTime(new Date());
    }

    if (!totalizador) {
      totalizador = {
        id: this.transacaoTotalizador.length + 1,
        codigoInvestimento,
        codigoUsuario,
        dataManutencao: dataAtual,
        valorInicial: 0,
        valorAcumulado: 0
      }
      this.transacaoTotalizador.push(totalizador);
    }

    return totalizador;
  }
}
