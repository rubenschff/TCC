import { PerguntaDTO } from './pergunta.dto';

export interface PerguntaRespostaDTO {
  respostas: Array<number>;
  pergunta: PerguntaDTO;
}
