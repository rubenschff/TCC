import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentosComponent } from './page/investimentos.component';

const routes: Routes = [
    {
      path: '',
      component: InvestimentosComponent
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
export class InvestimentosRoutingModule {}
