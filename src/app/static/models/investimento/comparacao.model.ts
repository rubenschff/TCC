export class ComparacaoModel {
  investimento!: string;
  valorInicial = 0;
  tempo = 0;
  juro = 0;

  constructor(investimento: string, tempo: number, juro: number) {
    this.investimento = investimento;
    this.tempo = tempo;
    this.juro = juro;
  }

  valorFinal(): number {
    return this.valorInicial * Math.pow((1 + (this.juro / 100)), this.tempo);
  }
}
