import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioRoutingModule } from './inicio.routing.module';
import { InicioComponent } from './page/inicio.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzListModule } from 'ng-zorro-antd/list';
import { HeaderComponent } from './components/header/header.component';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InvestimentosModule} from "@modules/features/investimentos/investimentos.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InicioRoutingModule,
        NzLayoutModule,
        NzPopoverModule,
        NzListModule,
        NzSegmentedModule,
        InvestimentosModule
    ],
    declarations: [InicioComponent, HeaderComponent]
})
export class InicioModule {}
