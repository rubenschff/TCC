import { InputEstadoEnum } from 'app/static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from 'app/static/enumerators/components/input-text-tipo.enum';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ac-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputTextComponent,
            multi: true
        }
    ]
})
export class InputTextComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    @Input() label?: string | null;
    @Input() placeholder = 'Selecione';
    @Input() estado?: number;
    @Input() tipo = InputTextTipoEnum.TEXTO;
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

    @ViewChild('input', { static: true }) input?: ElementRef<HTMLInputElement>;

    senhaVisivel = false;
    mostrarIconeSenha = false;

    focusClass = '';
    inputGroupClass = '';
    inputClass = '';
    widthClass = '';

    inputEstadoEnum = InputEstadoEnum;
    inputTextTipoEnum = InputTextTipoEnum;

    public readonly control = new FormControl();

    ngOnInit(): void {
        this.mostrarIconeSenha = this.mostrarIcone() && this.tipo === InputTextTipoEnum.SENHA;
        this.inputGroupClass = this.classInputGroup();
        this.inputClass = this.classInput(this.mostrarIconeSenha);
        this.placeholder = this.validarPlaceholder();

        switch (this.width) {
            case 230:
                this.widthClass = ' width-230';
                break;
            default:
                this.widthClass = ' width-responsivo';
                break;
        }
    }
    classInputGroup(): string {
        return this.mostrarIconeSenha ? 'corrigir-input-group' :
          this.estado === InputEstadoEnum.OBRIGATORIO ? 'obrigatorio' : '';
    }

    ngAfterViewInit() {
        this.focused && setTimeout(() => this.input?.nativeElement.focus(), 500);
    }

    private _onChange = (_: string | null) => {
    };

    public registerOnChange(fn: (value: string | null) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(): void {}

    public setDisabledState(): void {}

    public writeValue(value: string | null): void {
        this.control.setValue(value);
    }

    classInput(mostrarIcone: boolean) {
        let classe = '';

        switch (this.estado) {
            case InputEstadoEnum.DESABILITADO:
                classe = 'desabilitado';
                break;
            case InputEstadoEnum.OBRIGATORIO:
                classe = !mostrarIcone ? 'obrigatorio' : '';
                break;
            case InputEstadoEnum.READONLY:
                classe = 'readonly';
                break;
            default:
                break;
        }

        return classe;
    }

    validarTipo() {
        return;
    }

    mostrarIcone() {
        return !(this.estado || this.estado === InputEstadoEnum.DESABILITADO || this.estado === InputEstadoEnum.READONLY);
    }

    validarPlaceholder() {
        return !(this.estado === InputEstadoEnum.DESABILITADO || this.estado === InputEstadoEnum.READONLY) ? this.placeholder : '';
    }
}
