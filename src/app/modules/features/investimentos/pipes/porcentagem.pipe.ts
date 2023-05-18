import { Pipe, PipeTransform } from '@angular/core';
import { MathHelper } from '@static/helpers/math.helper';

@Pipe({ name: 'porcentagem' })
export class PorcentagemPipe implements PipeTransform {
  public transform(valor: number): string {
    return MathHelper.formatPorcentagem(valor);
  }
}
