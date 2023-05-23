export class MathHelper {
  static formatPorcentagem(value: number = 0): string {
    return `${defaultNumber(value).toFixed(2).toString().replace('.', ',')}% dia`;
  }

  static parsePorcentagem(value: string = '0'): string {
    return defaulString(value).replace('% dia', '');
  }

  static formatMoeda(value: number = 0): string {

    return `R$${defaultNumber(value).toFixed(2).toString().replace('.', ',')}`;
  }

  static parseMoeda(value: string = '0'): string {

    return defaulString(value).replace('R$', '').replace(',', '.');
  }
}

function defaultNumber(value: number): number {
  return value || 0;
}

function defaulString(value: string): string {
  return value || '0';
}
