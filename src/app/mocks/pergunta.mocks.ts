import { SituacaoPerguntaEnum } from '@static/enumerators/situacao-pergunta.enum';
import { DateHelper } from '@static/helpers/date.helper';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';
import { PerguntaDTO } from '@static/models/pergunta/pergunta.dto';
import { RespostaDTO } from '@static/models/pergunta/resposta.dto';

export class PerguntaMock {

  static respostas = new Array<RespostaDTO>;

  // static getPerguntas(): Array<PerguntaDTO> {

  //   let q1: PerguntaDTO = {
  //     id: 1,
  //     descricao: '<p>Se você tivesse dinheiro sobrando, quais das situações a seguir seriam as melhores opções para gastar esse dinheiro:</p>',
  //     alternativas: [{
  //       id: 1,
  //       descricao: 'Comprar um calçado novo, mesmo possuindo varios calçado que você gosta.',
  //       explicacao: 'Quanto mais objetos iguais nós temos, nesse caso um calçado, menos valor eles tem para nós. Pois seu valor está na utilidade e não na quantidade.',
  //       imagem: './assets/astronauta-confuso2.png'
  //     }, {
  //       id: 2,
  //       descricao: 'Comer alguma coisa na lanchonete, ainda que não esteja com fome.',
  //       explicacao: 'O valor da comida está na nutrição do nosso corpo ao comer. Mas se não temos fome, o valor dela para nós diminui bastante.',
  //       imagem: './assets/astronauta-explicando.png'
  //     }, {
  //       id: 3,
  //       descricao: 'Sair com seus melhores amigos.',
  //       explicacao: 'Usar seu dinheiro para se divertir com seus amigo é uma boa escolha. Muito bem!',
  //       imagem: './assets/astronauta-pose.png'
  //     }],
  //     alternativaCorreta: 3,
  //     recompensa: 100,
  //     explicacao: `<p>O dinheiro é o nosso mais forte aliado. Com ele, podemos sair com os amigos, comprar comida e roupas lindas de astronauta...
  //     O dinheiro pode comprar experiências incríveis. Mas para isso acontecer, precisamos saber usar ele da melhor forma possível.  </p>
  //     <p>
  //       Por primeiro, vamos diferenciar preço e valor das coisas. O preço é o quanto você vai pagar por algo ou o quanto vai ter que se esforçar para ter aquilo.
  //       Já o valor representa quanto algo é importante para você. Quando comparamos o preço e o valor, podemos decidir se o preço vale a pena ser pago para conseguir aquilo que é importante para nós.
  //     </p>
  //     <p>• Se aquilo que vamos comprar é importante para nós, então vale a pena gastar nosso dinheiro.</p>
  //     <p>• Se aquilo que vamos comprar não é tão importante, talvez não seja tão necessário gastar esse dinheiro.</p>
  //     <p>• Se aquilo que vamos comprar não é importante, então não devemos comprar.</p>`
  //   }

  //   let q2: PerguntaDTO = {
  //     id: 2,
  //     descricao: '<p>Qual das seguintes afirmações melhor representa a redução de desperdício de dinheiro com planos de celular:</p>',
  //     alternativas: [{
  //       id: 4,
  //       descricao: 'Sempre pegar o mais caro, pois esses são os melhores.',
  //       explicacao: 'Nem sempre o melhor é o que nós precisamos. As vezes, nossas necessidades são satisfeitas com planos mais baratos.',
  //       imagem: './assets/astronauta-planeta.png'
  //     }, {
  //       id: 5,
  //       descricao: 'Escolher um plano que seja ideal para você.',
  //       explicacao: 'Você mandou muito bem! Um plano que atenda nossas necessidades da melhor forma possível é uma boa escolha.',
  //       imagem: './assets/astronauta-saco-dinheiro.png'
  //     }, {
  //       id: 6,
  //       descricao: 'Não ter plano de celular, mesmo ele sendo necessário.',
  //       explicacao: 'Economizar a todo custo nem sempre é uma boa escolha, principalmente se você precisa do plano de celular.',
  //       imagem: './assets/astronauta-baloes.png'
  //     }],
  //     alternativaCorreta: 5,
  //     recompensa: 100,
  //     explicacao: `<p>Algo que a maioria das pessoas dão pouca importância, é com o desperdício de dinheiro. Agora você deve estar se perguntando: "Como é possível desperdiçar dinheiro?" e eu te respondo, meu amigo: Tudo o que você compra e não usa é desperdício de dinheiro. </p>
  //     <p>Os exemplos mais comuns são: </p>
  //     <p>• Roupas e calçados que usamos muito pouco.</p>
  //     <p>• Comidas do super mercado que estragam.</p>
  //     <p>• Luzes ou aparelhos ligados mesmo quando não estamos usando.</p>
  //     <p>• Assinaturas de programas ou planos de celular que usamos muito pouco.</p>
  //     <p>Quando o gasto é desnessário, precisamos elimina-lo. Mas se o gasto for algo que utilizamos pouco, podemos buscar formas de deixa-lo mais barato para o nosso bolso. </p>`
  //   }

  //   let q3: PerguntaDTO = {
  //     id: 3,
  //     descricao: '<p>Qual das seguintes alternativas <strong>não</strong> se encaixa nessas duas técnicas:</p>',
  //     alternativas: [{
  //       id: 7,
  //       descricao: 'Comprar o chocolate mais barato, mesmo não gostando da marca.',
  //       explicacao: 'Você acertou! Comprar um produto ruim só porque ele é barato, é um grande desperdício de dinheiro.',
  //       imagem: './assets/astronauta-cofre.png'
  //     }, {
  //       id: 8,
  //       descricao: 'Esperar para comprar várias camisetas, quando elas estiverem em promoção.',
  //       explicacao: 'Acho que você se confundiu... Essa é a forma de economizar sem abrir mão da marca.',
  //       imagem: './assets/astronauta-baloes.png'
  //     }, {
  //       id: 9,
  //       descricao: 'Comprar o sorvete com o preço um pouco mais barato, já que todos os sorvetes são deliciosos.',
  //       explicacao: 'Não foi dessa vez. Essa é a técnica de comprar o produto mais barato quando a marca não tem importância.',
  //       imagem: './assets/astronauta-confuso.png'
  //     }],
  //     alternativaCorreta: 7,
  //     recompensa: 100,
  //     explicacao: `<p>Quando queremos economizar dinheiro e o mesmo produto tem várias marcas, podemos fazer nossa escolha de duas formas diferentes.</p>
  //     <p>
  //       • A primeira forma é considerar primeiro o preço e depois a marca do produto. Nesse modo, você abre mão de melhores marcas em busca de preços baixos. É uma ótima técnica quando a marca do produto não tem importância ou quando você tem pressa para adquirir o produto.
  //     </p>
  //     <p>• A segunda forma é comprar uma quantidade maior do produto quando ele está em promoção. Nesse modo, você é capaz de comprar exatamente o produto que você quer, com preços mais baixo. É uma ótima técnica para comprar produtos de marcas específicas, pois fica mais barato comprar varios produtos em promoção do que comprar a mesma quantidade de produtos com o preço normal.</p>`
  //   }

  //   return [q1, q2, q3];
  // }

  // static find(codigoUsuario: number, codigoPergunta?: number): PerguntaRespostaDTO {
  //   let perguntas = this.getPerguntas();

  //   let respostas = this.respostas
  //     .filter(x => {
  //       let filtro = x.codigoUsuario == codigoUsuario

  //       return filtro;
  //     })
  //     .sort((x1: RespostaDTO, x2: RespostaDTO) =>
  //       new Date(x1.dataCadastro).getTime() - new Date(x2.dataCadastro).getTime()
  //     );

  //   let codigoRespostas = new Array<number>();
  //   let pergunta = perguntas[0];

  //   if (respostas.length > 0) {
  //     if (!codigoPergunta) {
  //       codigoPergunta = respostas[respostas.length - 1].codigoPergunta;
  //     }

  //     codigoRespostas = respostas.filter(x => x.codigoPergunta == codigoPergunta).map(x => x.codigoAlternativa);

  //     pergunta = this.getPerguntas().find(x => x.id == codigoPergunta)!;
  //   }

  //   if (!pergunta) {
  //     throw Error('Pergunta não encontrada!');
  //   }

  //   let perguntaResposta: PerguntaRespostaDTO = {
  //     codigoUsuario,
  //     pergunta,
  //     respostas: codigoRespostas
  //   }

  //   return perguntaResposta;
  // }

  // static findAll(codigoUsuario: number): Array<ListaRespostaDTO> {
  //   let retorno = new Array<ListaRespostaDTO>();

  //   let ultimaFinalizada = true;

  //   this.getPerguntas().forEach(pergunta => {
  //     let respostas = this.respostas
  //     .filter(x => x.codigoUsuario == codigoUsuario && x.codigoPergunta == pergunta.id)
  //     .map(x => x.codigoAlternativa);

  //     let situacao!: number;

  //     if (respostas.includes(pergunta.alternativaCorreta) && respostas.length < 3) {
  //       situacao = SituacaoPerguntaEnum.ACERTOU;
  //       ultimaFinalizada = true;
  //     } else if (respostas.length == 3) {
  //       situacao = SituacaoPerguntaEnum.ERROU;
  //       ultimaFinalizada = true;
  //     } else if (!respostas.includes(pergunta.alternativaCorreta) && ultimaFinalizada) {
  //       situacao = SituacaoPerguntaEnum.EM_ABERTO;
  //       ultimaFinalizada = false;
  //     } else if (!ultimaFinalizada) {
  //       situacao = SituacaoPerguntaEnum.BLOQUEADO;
  //     }

  //     let perguntaRetorno: ListaRespostaDTO = {
  //       codigoUsuario: codigoUsuario,
  //       respostas,
  //       codigoPergunta: pergunta.id,
  //       situacao
  //     }

  //     retorno.push(perguntaRetorno);
  //   });

  //   return retorno;
  // }

  // static add(codigoUsuario: number, codigoPergunta: number, codigoAlternativa: number): boolean {
  //   let respota: RespostaDTO = {
  //     codigoUsuario,
  //     codigoPergunta,
  //     codigoAlternativa,
  //     dataCadastro: DateHelper.formatDateTime(new Date())
  //   }

  //   this.respostas.push(respota);
  //   return true;
  // }
}
