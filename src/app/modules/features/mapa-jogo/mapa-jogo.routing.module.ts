import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaJogoComponent } from './page/mapa-jogo.component';

const routes: Routes = [
    {
      path: '',
      component: MapaJogoComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapaJogoRoutingModule {}
