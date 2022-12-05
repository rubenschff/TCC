import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-explicacao-popup',
  templateUrl: './explicacao-popup.component.html',
  styleUrls: ['./explicacao-popup.component.scss']
})
export class ExplicacaoPopupComponent {
  @Input() explicacao!: string;
  @Input() img!: string;
}
