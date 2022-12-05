import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';

export class InvestimentoMock {

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

  static find(id: number, validar = true): InvestimentoDTO | undefined {
    let retorno = this.getAll().find(x => x.id == id);

    if (validar && !retorno) {
      throw Error("Investimento não Encontrado!");
    }

    return retorno;
  }
}
