import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestimentosRoutingModule } from './investimentos.routing.module';
import { InvestimentosComponent } from './page/investimentos.component';
import { InvestimentoComponent } from './components/investimento/investimento.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ComparacaoComponent } from './components/comparacao/comparacao.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { DadosFinanceirosComponent } from './components/dados-financeiros/dados-financeiros.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ButtonModule } from '@shared/components/button/button.module';
import { CloseCircleOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [ CloseCircleOutline ];

@NgModule({
    imports: [
      CommonModule,
      NzFormModule,
      FormsModule,
      ReactiveFormsModule,
      InvestimentosRoutingModule,
      NzCardModule,
      NzListModule,
      DragDropModule,
      NzInputNumberModule,
      DecimalPipe,
      NzDividerModule,
      NzIconModule.forRoot(icons),
      ButtonModule
    ],
    declarations: [InvestimentosComponent, InvestimentoComponent, ComparacaoComponent, DadosFinanceirosComponent]
})
export class InvestimentosModule {}
