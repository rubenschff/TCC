import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestoesRoutingModule } from './questoes.routing.module';
import { QuestoesComponent } from './page/questoes.component';
import { QuestaoComponent } from './components/questao/questao.component';
import {MatRadioModule} from '@angular/material/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
    imports: [
      CommonModule,
      QuestoesRoutingModule,
      MatRadioModule,
      NzDividerModule
    ],
    declarations: [QuestoesComponent, QuestaoComponent]
})
export class QuestoesModule {

}
