import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapaJogoRoutingModule } from './mapa-jogo.routing.module';
import { MapaJogoComponent } from './page/mapa-jogo.component';

@NgModule({
    imports: [
      CommonModule,
      MapaJogoRoutingModule
    ],
    declarations: [MapaJogoComponent]
})
export class MapaJogoModule {}
