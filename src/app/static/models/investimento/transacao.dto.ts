export interface TransacaoDTO {
  investimentoId: number;
  situacao: number;
  tipo: number;
  valorTransacao: number;
  valorCota?: number;
  quantidadeCotas?: number;
}
