import { PerguntaDTO } from './pergunta.dto';
import { RespostaDTO } from './resposta.dto';

export interface PerguntaRespostaDTO {
  respostas: Array<RespostaDTO>;
  pergunta: PerguntaDTO;
}
