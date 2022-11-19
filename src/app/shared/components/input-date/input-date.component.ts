import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from 'app/static/enumerators/components/input-text-tipo.enum';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ac-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['./input-date.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputDateComponent,
            multi: true
        }
    ]
})
export class InputDateComponent implements OnInit, ControlValueAccessor {
    @Input() label!: string;
    @Input() placeholder = 'Selecione';
    @Input() estado?: number;
    @Input() focused = false;
    @Input() width?: number;

    private _value = '';
    @Input()
    set value(value: string) {
        this._value = value;
        this._onChange(this._value);
    }

    get value() {
        return this._value;
    }

    @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

    senhaVisivel = false;
    mostrarIconeSenha = false;

    datePickerClass = '';
    widthClass = '';

    inputEstadoEnum = InputEstadoEnum;
    inputTextTipoEnum = InputTextTipoEnum;

    public readonly control = new FormControl();

    ngOnInit(): void {
      this.setarClasses();
      this.placeholder = this.validarPlaceholder();
    }

    setarClasses(): void {
      this.datePickerClass = this.estado === InputEstadoEnum.OBRIGATORIO ? 'obrigatorio' : '';

      switch (this.width) {
        case 230:
          this.widthClass = ' width-230';
          break;
        default:
          this.widthClass = ' width-responsivo';
          break;
      }
    }

    private _onChange = (_: string | null) => {};

    public registerOnChange(fn: (value: string | null) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(): void {}

    public setDisabledState(): void {}

    public writeValue(value: string | null): void {
        this.control.setValue(value);
    }

    validarPlaceholder() {
      return !(this.estado === InputEstadoEnum.DESABILITADO || this.estado === InputEstadoEnum.READONLY)
          ? this.placeholder : ' ';
    }
}
