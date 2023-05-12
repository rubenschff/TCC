import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { RotasConstant } from '@static/constants/rotas.constant';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RotasConstant.LOGIN
  }, {
    path: RotasConstant.INICIO,
    loadChildren: () => import('./modules/base/inicio/inicio.module').then(m => m.InicioModule),
    data: { animation: 'fade' }
  }, {
    path: RotasConstant.LOGIN,
    loadChildren: () => import('./modules/base/login/login.module').then(m => m.LoginModule),
    data: { animation: 'fade' }
  }, {
    path: '**',
    redirectTo: RotasConstant.INICIO
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), NzMessageModule],
exports: [RouterModule]
})
export class AppRoutingModule { }
