import { AlternativaDTO } from './alternativa.dto';

export interface PerguntaDTO {
  id: number;
  descricao: string;
  explicacao: string;
  alternativas: Array<AlternativaDTO>;
  alternativaCorreta: number;
  recompensa: number;
}
