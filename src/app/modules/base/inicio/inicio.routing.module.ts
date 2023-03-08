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
        }, {
          path: RotasConstant.INVESTIMENTOS,
          loadChildren: () => import('@modules/features/investimentos/investimentos.module').then(m => m.InvestimentosModule)
        }, {
          path: RotasConstant.CONTA,
          loadChildren: () => import('@modules/features/conta/conta.module').then(m => m.ContaModule)
        }, {
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
