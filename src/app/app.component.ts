import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { fadeAnimation } from './animation';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation]
})
export class AppComponent implements AfterContentChecked {
  constructor(public loaderService: LoaderService, private cdref: ChangeDetectorRef) {}

  ngAfterContentChecked() {
      this.cdref.detectChanges();
  }
}
