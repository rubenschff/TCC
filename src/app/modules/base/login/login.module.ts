import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { InputDateModule } from '@shared/components/input-date/input-date.module';
import { InputTextModule } from '@shared/components/input-text/input-text.module';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './page/login.component';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        InputTextModule,
        ButtonModule,
        InputDateModule
    ],
    declarations: [
      LoginComponent,
      FormLoginComponent,
      FormCadastroComponent
    ]
})
export class LoginModule {}
