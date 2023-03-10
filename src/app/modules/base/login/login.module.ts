import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/components/button/button.module';
import { InputDateModule } from '@shared/components/input-date/input-date.module';
import { InputTextModule } from '@shared/components/input-text/input-text.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './page/login.component';
import {NzFormModule} from "ng-zorro-antd/form";


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        InputTextModule,
        ButtonModule,
        InputDateModule,
        FormsModule,
        ReactiveFormsModule,
        NzModalModule,
        NzFormModule
    ],
    declarations: [
      LoginComponent,
      FormLoginComponent,
      FormCadastroComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}
