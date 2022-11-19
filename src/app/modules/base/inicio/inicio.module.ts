import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioRoutingModule } from './inicio.routing.module';
import { InicioComponent } from './page/inicio.component';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule
    ],
    declarations: [InicioComponent]
})
export class InicioModule {}
