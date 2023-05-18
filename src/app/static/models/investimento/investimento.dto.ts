import { TransacaoTotalizadorDTO } from './transacao-totalizador.dto';

export interface InvestimentoDTO {
  id: number;
  descricao: string;
  explicacao: string;
  risco: number;
  liquidez: number;
  imagem: string;
  juro: number;
  aporteInicial: number;
  totalizador: TransacaoTotalizadorDTO
}
