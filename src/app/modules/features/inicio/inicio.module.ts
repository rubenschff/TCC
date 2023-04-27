import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioComponent } from './page/inicio.component';
import { InicioRoutingModule } from './inicio.routing.module';

@NgModule({
    imports: [
      CommonModule,
      InicioRoutingModule
    ],
    declarations: [InicioComponent]
})
export class InicioModule {}
