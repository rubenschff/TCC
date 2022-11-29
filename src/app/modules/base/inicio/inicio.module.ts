import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioRoutingModule } from './inicio.routing.module';
import { InicioComponent } from './page/inicio.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzListModule } from 'ng-zorro-antd/list';
import { HeaderComponent } from './components/header/header.component';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@NgModule({
    imports: [
      CommonModule,
      InicioRoutingModule,
      NzLayoutModule,
      NzPopoverModule,
      NzListModule,
      NzSegmentedModule
    ],
    declarations: [InicioComponent, HeaderComponent]
})
export class InicioModule {}
