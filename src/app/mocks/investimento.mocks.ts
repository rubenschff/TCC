// import { DateHelper } from '@static/helpers/date.helper';
// import { FinanceiroDTO } from '@static/models/investimento/financeiro.dto';
// import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
// import { TransacaoTotalizadorDTO } from '@static/models/investimento/transacao-totalizador.dto';
// import { TransacaoDTO } from '@static/models/investimento/transacao.dto';

// export class InvestimentoMock {

//   static financeiro = new Array<FinanceiroDTO>;
//   static transacao = new Array<TransacaoDTO>;
//   static transacaoTotalizador = new Array<TransacaoTotalizadorDTO>;

//   static getAll(): Array<InvestimentoDTO> {

//     let poupanca: InvestimentoDTO = {
//       id: 1,
//       descricao: 'Poupança',
//       risco: 10,
//       juro: 2.5,
//       liquidez: 0,
//       imagem: './assets/piggy-bank.png',
//       explicacao: `<p>A poupança é um investimento disponível em todos os bancos do país. Ela é bastante segura e tem baixa probalidade de você perder dinheiro, pois bancos possuem bastante dinheiro e são bem administrados, sendo muito raro um deles falir. </p>
//         <p>É um investimento sem taxas e que todo banco é obrigado a disponibilizar. Ela também não tem um valor mínimo para investir, sendo possível investir qualquer quantidade. A taxa de juros é aplicada a cada 3 dias.</p>
//         <p>Outra característica interessante é que você pode resgatar o dinheiro a qualquer momento no seu banco.</p>
//         <p>Porém, por ter todos esses benefícios seu rendimento de juros não é muito alto, sendo a menor entre todos os investimentos. </p>
//         <p>Ela é ideal para guardar seu dinheiro que será movimentado e gasto durante o mês. Não é indicado deixar muito dinheiro por longos períodos nesse investimento.</p>`
//     }

//     let tesouroDireto: InvestimentoDTO = {
//       id: 2,
//       descricao: 'Tesouro Direto',
//       risco: 0.5,
//       juro: 6.0,
//       liquidez: 1,
//       imagem: './assets/capitol.png',
//       explicacao: `<p>O Tesouro Direto é um investimento disponbilizado pelo governo do Brasil e tem esse nome pois você investe diretamente no dinheiro do país. </p>
//         <p>É o investimento mais seguro do Brasil, pois você perderia seus dracmas apenas se o país falir, o que é quase impossível. </p>
//         <p>Ele possui um imposto pago automaticamente a cada mês, mas é bem baixo. Possui um valor mínimo de 30,00 dracmas para investir. </p>
//         <p>Os dracmas serão recebidos um dia após o pedido de resgate e a taxa de juros é aplicada diariamente.</p>
//         <p>Seu rendimento é bom, mas sua principal característica é a segurança.</p>
//         <p>Ela é ideal para guardar seus dracmas que serão usados logo ou uma reserva para emergências.  </p>`
//     }

//     let cdb: InvestimentoDTO = {
//       id: 3,
//       descricao: 'CDB',
//       risco: 0.5,
//       juro: 8.4,
//       liquidez: 14,
//       imagem: './assets/bank.png',
//       explicacao: `
//       <p>O CDB ou Crédito de Depósito Bancário é um investimento disponibilizado pelos bancos, onde você empresa dinheiro para os bancos financiarem seus clientes. </p>
//       <p>É um investimento seguro, pois bancos são muito ricos e bem administrados, sendo muito raro um deles falir.</p>
//       <p>Sua principal caracteristica é que a taxa de juros é aplicada a cada 7 dias. </p>
//       <p>Possui um imposto que desconta 20% do lucro caso resgatar antes de 2 semanas. Caso resgatar após 2 semanas o imposto cai para 15%.</p>
//       <p>Seu rendimento é muito bom, basta ficar atento ao imposto e ao período de 7 dias para a aplicação dos juros.</p>
//       <p>Esse investimento é ideal para guardar dracmas por longos períodos. Por isso, lembre-se investir apenas os dracmas que não lhe farão falta.</p>`
//     }

//     return [poupanca, tesouroDireto, cdb];
//   }

//   static findInvestimento(id: number, validar = true): InvestimentoDTO {
//     let retorno = this.getAll().find(x => x.id == id);

//     if (validar && !retorno) {
//       throw Error("Investimento não Encontrado!");
//     }

//     return retorno!;
//   }

//   static findFinanceiro(codigoUsuario: number): FinanceiroDTO {
//     let retorno = this.financeiro.find(x => x.codigoUsuario == codigoUsuario);

//     if (!retorno) {
//       retorno = {
//         codigoUsuario,
//         valorDisponivel: 0,
//         valorArrecadado: 0,
//         valorAcumulado: 0,
//         dataManutencao: DateHelper.formatDateTime(new Date())
//       }
//     }

//     return retorno;
//   }

//   static addValor(codigoUsuario: number, valor: number) {
//     let financeiro = this.financeiro.find(x => x.codigoUsuario == codigoUsuario);

//     if (financeiro) {
//       financeiro.valorArrecadado += valor;
//       financeiro.valorDisponivel += valor;
//     } else {
//       financeiro = {
//         id: this.financeiro.length + 1,
//         codigoUsuario,
//         valorDisponivel: valor,
//         valorArrecadado: valor,
//         valorAcumulado: 0,
//         dataManutencao: DateHelper.formatDateTime(new Date())
//       }

//       this.financeiro.push(financeiro);
//     }
//   }

//   static operar(codigoUsuario: number, codigoInvestimento: number, valor: number, flagCompra: boolean) {
//     let dataAtual = DateHelper.formatDateTime(new Date());

//     // this.transacao.push({
//     //   id: this.transacao.length + 1,
//     //   codigoUsuario,
//     //   codigoInvestimento,
//     //   valor,
//     //   flagCompra,
//     //   dataCadastro: dataAtual
//     // });

//     let financeiro = this.financeiro.find(x => x.codigoUsuario == codigoUsuario)!;

//     if (flagCompra) {
//       financeiro.valorAcumulado += valor;
//       financeiro.valorDisponivel -= valor;
//     } else {
//       financeiro.valorAcumulado -= valor;
//       financeiro.valorDisponivel += valor;
//     }

//     let totalizador = this.findTotalizador(codigoUsuario, codigoInvestimento, dataAtual);

//     totalizador.dataManutencao = dataAtual;
//     if (flagCompra) {
//       totalizador.valorInicial += valor;
//       totalizador.valorAcumulado += valor;
//     } else {
//       totalizador.valorInicial -= valor;
//       totalizador.valorAcumulado -= valor;
//     }
//   }

//   static findTotalizador(codigoUsuario: number, codigoInvestimento: number, dataAtual?: string): TransacaoTotalizadorDTO {
//     let totalizador = this.transacaoTotalizador
//       .find(x => x.codigoUsuario == codigoUsuario && x.codigoInvestimento == codigoInvestimento);

//     if (!dataAtual) {
//       dataAtual = DateHelper.formatDateTime(new Date());
//     }

//     if (!totalizador) {
//       totalizador = {
//         id: this.transacaoTotalizador.length + 1,
//         codigoInvestimento,
//         codigoUsuario,
//         dataManutencao: dataAtual,
//         valorInicial: 0,
//         valorAcumulado: 0
//       }
//       this.transacaoTotalizador.push(totalizador);
//     }

//     return totalizador;
//   }
// }
