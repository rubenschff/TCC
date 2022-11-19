import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonTipoEnum } from '@static/enumerators/components/button-tipo.enum';

@Component({
    selector: 'ac-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() text = 'Salvar';
    @Input() tipo = ButtonTipoEnum.VERDE_NORMAL;
    @Input() disabled = false;
    @Input() loading = false;
    @Input() width?: number;

    @Output() readonly aoClicar = new EventEmitter<void>();

    classeTipo = '';
    classeWidth = '';

    ngOnInit(): void {
        switch (this.tipo) {
            case ButtonTipoEnum.VERDE_GRANDE:
                this.classeTipo = 'verde grande';
                break;

            case ButtonTipoEnum.BRANCO_NORMAL:
                this.classeTipo = 'branco';
                break;
            default:
                this.classeTipo = 'verde';
                break;
        }

        switch (this.width) {
            case 120:
                this.classeWidth = 'width-120';
                break;
            default:
                this.classeWidth = 'width-responsivo';
                break;
        }
    }
}
