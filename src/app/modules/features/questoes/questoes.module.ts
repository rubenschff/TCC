import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestoesRoutingModule } from './questoes.routing.module';
import { QuestoesComponent } from './page/questoes.component';
import { QuestaoComponent } from './components/questao/questao.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExplicacaoPopupComponent } from './components/explicacao-popup/explicacao-popup.component';
import { QuestionCircleTwoTone } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ListaQuestoesComponent } from './components/lista-questoes/lista-questoes.component';

const icons: IconDefinition[] = [ QuestionCircleTwoTone ];

@NgModule({
    imports: [
      CommonModule,
      QuestoesRoutingModule,
      NzFormModule,
      FormsModule,
      ReactiveFormsModule,
      NzDividerModule,
      NzRadioModule,
      NzIconModule.forRoot(icons),
      NzModalModule
    ],
    declarations: [QuestoesComponent, QuestaoComponent, ExplicacaoPopupComponent, ListaQuestoesComponent]
})
export class QuestoesModule {

}
