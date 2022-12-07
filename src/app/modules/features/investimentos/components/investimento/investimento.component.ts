import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { StorageHelper } from '@static/helpers/storage.helper';
import { InvestimentoDTO } from '@static/models/investimento/investimento.dto';
import { InvestimentoMock } from 'app/mocks/investimento.mocks';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { OperarComponent } from '../operar/operar.component';

@Component({
  selector: 'ac-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent implements OnInit {

  @Input() investimento!: InvestimentoDTO;

  @Output() eventCardClick = new EventEmitter<InvestimentoDTO>();

  index1 = 0;

  ref!: NzModalRef;

  mostrarInvestir!: boolean;
  mostrarResgatar!: boolean;

  placement: NzDrawerPlacement = 'right';
  drawerVisivel = false;

  constructor(
    private modal: NzModalService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.atualizarCard();
  }

  cardClick() {
    this.eventCardClick.emit(this.investimento);
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
            InvestimentoMock.operar(StorageHelper.codigoUsuario, this.investimento.id, comp.valor, comp.flagCompra);
            this.ref.destroy();
            this.message.success(`Operação realizada com sucesso!`);
            this.atualizarCard();
          };
        }
      }]
    });
  }

  atualizarCard() {
    this.mostrarInvestir = !!InvestimentoMock.findFinanceiro(StorageHelper.codigoUsuario).valorDisponivel;
    this.mostrarResgatar = !!InvestimentoMock.findTotalizador(StorageHelper.codigoUsuario, this.investimento.id).valorAcumulado;
  }
}
