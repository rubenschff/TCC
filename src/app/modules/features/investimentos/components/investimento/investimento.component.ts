import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { OperarComponent } from '../operar/operar.component';
import { InvestimentoService } from 'app/services/http/investimento.service';
import { SituacaoTransacaoEnum } from '@static/enumerators/investimento/situacao-transacao.enum';
import { TipoTransacaoEnum } from '@static/enumerators/investimento/tipo-transacao.enum';
import { NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import {DadosFinanceirosService} from "../../../../../services/dados-financeiros.service";
import {InvestimentosComponent} from "@modules/features/investimentos/page/investimentos.component";


@Component({
  selector: 'ac-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent {

  @Input() investimento!: InvestimentoDTO;

  @Output() compararCardClick = new EventEmitter<InvestimentoDTO>();

  ref!: NzModalRef;

  disponivel = 0;

  constructor(
    private modal: NzModalService,
    private message: NzMessageService,
    private investimentoService: InvestimentoService,
    private dadosFinanceirosService : DadosFinanceirosService,
    private investimentoComponent : InvestimentosComponent
  ) {}

  cardClick() {
    this.compararCardClick.emit(this.investimento);
  }

  clickOperar(flagCompra: boolean) {
    this.ref = this.modal.create({
      nzContent: OperarComponent,
      nzTitle: flagCompra ? 'Operação de compra' : 'Operação de venda',
      nzWidth: 400,
      nzWrapClassName: `operar-popup`,
      nzComponentParams: {
        flagCompra,
        investimento: this.investimento,
      },
      nzOkText: 'Salvar',
      nzFooter: [{
        label: 'Cancelar',
        onClick: () => {
          this.ref.destroy();
        }
      }, {
        label: 'Salvar',
        type: 'primary',
        onClick: (comp: OperarComponent) => {
          
          if (comp.valor > comp.disponivel) {
            this.message.error(`Valor da ${ comp.flagCompra ? 'compra' : 'venda'} é maior do que a quantidade disponível!`);
          } else {
            this.investimentoService.operar({
              investimentoId: comp.investimento.id,
              situacao: SituacaoTransacaoEnum.ABERTA,
              tipo: comp.flagCompra ? TipoTransacaoEnum.COMPRA : TipoTransacaoEnum.VENDA,
              valorTransacao: comp.valor
            }).subscribe({
              next: () => {
                this.investimentoComponent.ngOnInit()
                this.dadosFinanceirosService.atualizarFinanceiro() //atualiza financeiro
                this.ref.destroy();
                this.message.success(`Operação realizada com sucesso!`);
              },
              error: error => {
                console.log(error);
              }
            });
          };
        }
      }]
    });
  }

  clickSobre() {
    this.ref = this.modal.create({
      nzContent: this.investimento.explicacao,
      nzTitle: this.investimento.descricao,
      nzWidth: 400,
      nzBodyStyle: { height: '300px', 'overflow-y': 'scroll' },
      nzWrapClassName: `operar-popup`,
      nzFooter: [{
        label: 'Fechar',
        onClick: () => {
          this.ref.destroy();
        }
      }]
    });
  }

  mostrarDadosInvestimento(): NzTooltipTrigger | undefined {
    return this.investimento.totalizador.valorInicial ? 'hover' : null;
  }
}

