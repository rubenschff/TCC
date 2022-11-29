import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '@modules/base/inicio/page/inicio.component';
import { RotasConstant } from '@static/constants/rotas.constant';

const routes: Routes = [
    {
      path: '',
      component: InicioComponent,
      children: [
        {
          path: RotasConstant.QUESTOES,
          loadChildren: () => import('@modules/features/questoes/questoes.module').then(m => m.QuestoesModule)
        },
        {
            path: '**',
            loadChildren: () => import('@modules/features/mapa-jogo/mapa-jogo.module').then(m => m.MapaJogoModule)
        }
      ]
    }, {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InicioRoutingModule {}
