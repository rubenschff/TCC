import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoaderService } from './core/services/loader.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, NzSpinModule],
  bootstrap: [AppComponent],
  providers: [LoaderService, {provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AppModule { }
