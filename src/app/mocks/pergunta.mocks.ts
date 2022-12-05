import { DateHelper } from '@static/helpers/date.helper';
import { PerguntaRespostaDTO } from '@static/models/pergunta/pergunta-resposta.dto';
import { PerguntaDTO } from '@static/models/pergunta/pergunta.dto';
import { RespostaDTO } from '@static/models/pergunta/resposta.dto';

export class PerguntaMock {

  static respostas = new Array<RespostaDTO>;

  static getPerguntas(): Array<PerguntaDTO> {

    let q1: PerguntaDTO = {
      id: 1,
      descricao: '<p>Se você tivesse dinheiro sobrando, quais das situações a seguir seriam as melhores opções para gastar esse dinheiro:</p>',
      alternativas: [{
        id: 1,
        descricao: 'Comprar um calçado novo, mesmo possuindo varios calçado que você gosta.',
        explicacao: 'Quanto mais objetos iguais nós temos, nesse caso um calçado, menos valor eles tem para nós. Pois seu valor está na utilidade e não na quantidade.'
      }, {
        id: 2,
        descricao: 'Comer alguma coisa na lanchonete, ainda que não esteja com fome.',
        explicacao: 'O valor da comida está na nutrição do nosso corpo ao comer. Mas se não temos fome, o valor dela para nós diminui bastante.'
      }, {
        id: 3,
        descricao: 'Sair com seus melhores amigos.',
        explicacao: 'Usar seu dinheiro para se divertir com seus amigo é uma boa escolha. Muito bem!'
      }],
      alternativaCorreta: 3,
      recompensa: 100,
      explicacao: `<p>O dinheiro é o nosso mais forte aliado. Com ele, podemos sair com os amigos, comprar comida e roupas lindas de astronauta...
      O dinheiro pode comprar experiências incríveis. Mas para isso acontecer, precisamos saber usar ele da melhor forma possível.  </p>
      <p>
        Por primeiro, vamos diferenciar preço e valor das coisas. O preço é o quanto você vai pagar por algo ou o quanto vai ter que se esforçar para ter aquilo.
        Já o valor representa quanto algo é importante para você. Quando comparamos o preço e o valor, podemos decidir se o preço vale a pena ser pago para conseguir aquilo que é importante para nós.
      </p>
      <p>• Se aquilo que vamos comprar é importante para nós, então vale a pena gastar nosso dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é tão importante, talvez não seja tão necessário gastar esse dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é importante, então não devemos comprar.</p>`
    }

    let q2: PerguntaDTO = {
      id: 2,
      descricao: '<p>Se você tivesse dinheiro sobrando, quais das situações a seguir seriam as melhores opções para gastar esse dinheiro:</p>',
      alternativas: [{
        id: 1,
        descricao: 'Comprar um sapato novo, mesmo possuindo varios sapatos que você gosta.',
        explicacao: ''
      }, {
        id: 2,
        descricao: 'Comer alguma coisa na lanchonete, ainda que não esteja com fome.',
        explicacao: ''
      }, {
        id: 3,
        descricao: 'Sair com seus melhores amigos.',
        explicacao: ''
      }],
      alternativaCorreta: 3,
      recompensa: 100,
      explicacao: `<p>O dinheiro é o nosso mais forte aliado. Com ele, podemos sair com os amigos, comprar comida e roupas lindas de astronauta...
      O dinheiro pode comprar experiências incríveis. Mas para isso acontecer, precisamos saber usar ele da melhor forma possível.  </p>
      <p>
        Por primeiro, vamos diferenciar preço e valor das coisas. O preço é o quanto você vai pagar por algo ou o quanto vai ter que se esforçar para ter aquilo.
        Já o valor representa quanto algo é importante para você. Quando comparamos o preço e o valor, podemos decidir se o preço vale a pena ser pago para conseguir aquilo que é importante para nós.
      </p>
      <p>• Se aquilo que vamos comprar é importante para nós, então vale a pena gastar nosso dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é tão importante, talvez não seja tão necessário gastar esse dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é importante, então não devemos comprar.</p>`
    }

    let q3: PerguntaDTO = {
      id: 3,
      descricao: '<p>Se você tivesse dinheiro sobrando, quais das situações a seguir seriam as melhores opções para gastar esse dinheiro:</p>',
      alternativas: [{
        id: 1,
        descricao: 'Comprar um sapato novo, mesmo possuindo varios sapatos que você gosta.',
        explicacao: ''
      }, {
        id: 2,
        descricao: 'Comer alguma coisa na lanchonete, ainda que não esteja com fome.',
        explicacao: ''
      }, {
        id: 3,
        descricao: 'Sair com seus melhores amigos.',
        explicacao: ''
      }],
      alternativaCorreta: 3,
      recompensa: 100,
      explicacao: `<p>O dinheiro é o nosso mais forte aliado. Com ele, podemos sair com os amigos, comprar comida e roupas lindas de astronauta...
      O dinheiro pode comprar experiências incríveis. Mas para isso acontecer, precisamos saber usar ele da melhor forma possível.  </p>
      <p>
        Por primeiro, vamos diferenciar preço e valor das coisas. O preço é o quanto você vai pagar por algo ou o quanto vai ter que se esforçar para ter aquilo.
        Já o valor representa quanto algo é importante para você. Quando comparamos o preço e o valor, podemos decidir se o preço vale a pena ser pago para conseguir aquilo que é importante para nós.
      </p>
      <p>• Se aquilo que vamos comprar é importante para nós, então vale a pena gastar nosso dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é tão importante, talvez não seja tão necessário gastar esse dinheiro.</p>
      <p>• Se aquilo que vamos comprar não é importante, então não devemos comprar.</p>`
    }

    return [q1, q2, q3];
  }

  static find(codigoUsuario: number): PerguntaRespostaDTO {
    // let respostas = this.respostas
    //   .filter(x => {
    //     let filtro = x.codigoUsuario == codigoUsuario

    //     return filtro;
    //   })
    //   .sort((x1: RespostaDTO, x2: RespostaDTO) => DateHelper.parseStringToDate(x1.dataCadastro).getTime() - DateHelper.parseStringToDate(x2.dataCadastro).getTime())
    //   .map(x => x.codigoAlternativa);

    let respostas = new Array<number>();


    let pergunta = this.getPerguntas()[0];

    if (!pergunta) {
      throw Error('Pergunta não encontrada!');
    }

    let perguntaResposta: PerguntaRespostaDTO = {
      codigoUsuario,
      pergunta,
      respostas
    }

    return perguntaResposta;
  }

  static add(codigoUsuario: number, codigoPergunta: number, codigoAlternativa: number): boolean {

    let respota: RespostaDTO = {
      codigoUsuario,
      codigoPergunta,
      codigoAlternativa,
      dataCadastro: DateHelper.dateTime
    }

    this.respostas.push(respota);
    return true;
  }
}
