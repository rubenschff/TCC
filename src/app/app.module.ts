import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoaderService } from './core/services/loader.service';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, NzSpinModule],
  bootstrap: [AppComponent],
  providers: [LoaderService]
})
export class AppModule { }
