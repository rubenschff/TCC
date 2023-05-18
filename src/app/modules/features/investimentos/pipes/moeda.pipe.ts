import { Pipe, PipeTransform } from '@angular/core';
import { MathHelper } from '@static/helpers/math.helper';

@Pipe({ name: 'moeda' })
export class MoedaPipe implements PipeTransform {
  public transform(valor: number): string {
    return MathHelper.formatMoeda(valor);
  }
}
