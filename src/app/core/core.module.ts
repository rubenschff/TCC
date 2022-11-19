import { NZ_DATE_LOCALE, NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentryErrorHandler } from '@core/sentry/sentry-error.handler';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { nzAutotipGlobalConfig } from '@static/constants/form-config.constant';
import { ptBR } from 'date-fns/locale';

registerLocaleData(pt);

const ngZorroConfig: NzConfig = {
    form: { nzAutoTips: nzAutotipGlobalConfig }
};

@NgModule({
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
    exports: [BrowserAnimationsModule, HttpClientModule],
    providers: [
        { provide: ErrorHandler, useClass: SentryErrorHandler },
        { provide: NZ_I18N, useValue: pt_BR },
        { provide: NZ_DATE_LOCALE, useValue: ptBR },
        { provide: NZ_CONFIG, useValue: ngZorroConfig }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule já foi carregado. Importe o CoreModule somente no AppModule.');
        }
    }
}
