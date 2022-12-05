import { PerguntaDTO } from './pergunta.dto';

export interface PerguntaRespostaDTO {
  codigoUsuario: number;
  respostas?: Array<number>;
  pergunta: PerguntaDTO;
}
