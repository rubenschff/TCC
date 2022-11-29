import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestoesComponent } from './page/questoes.component';

const routes: Routes = [
    {
      path: '',
      component: QuestoesComponent
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
export class QuestoesRoutingModule {}
