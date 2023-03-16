import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/components/button/button.module';
import { InputDateModule } from '@shared/components/input-date/input-date.module';
import { InputTextModule } from '@shared/components/input-text/input-text.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ContaRoutingModule } from './conta.routing.module';
import { ContaComponent } from './page/conta.component';

@NgModule({
    imports: [
      CommonModule,
      ContaRoutingModule,
      InputTextModule,
      ButtonModule,
      InputDateModule,
      NzFormModule,
      FormsModule,
      ReactiveFormsModule,
      NzMessageModule
    ],
    declarations: [ContaComponent]
})
export class ContaModule {}
