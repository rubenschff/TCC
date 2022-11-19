import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs/operators';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioApi } from '@core/api/usuario.api';
import { AutenticacaoService } from '@core/services/autenticacao.service';
import { ForcaSenha } from '@shared/injectables/forca-senha';
import { StringsConstant } from '@static/constants/strings.constant';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { StorageHelper } from '@static/helpers/storage.helper';
import { UtilHelper } from '@static/helpers/util.helper';
import { ExcecaoServer } from '@static/models/excecao-server.model';
import { AlterarSenhaPayloadDTO } from '@static/models/usuario/alterar-senha-payload.dto';
import { ValorStringDTO } from '@static/models/valor-string.dto';
import { CustomValidators } from '@static/validators/custom-validators.validator';

@Component({
    selector: 'ac-trocar-senha',
    templateUrl: './trocar-senha.component.html',
    styleUrls: ['./trocar-senha.component.scss']
})
export class TrocarSenhaComponent implements OnInit, AfterViewInit {
    _inputTextTipoEnum = InputTextTipoEnum;

    @ViewChild('senhaAtual') senhaAtual: ElementRef<HTMLInputElement>;

    readonly SENHA_ATUAL = StringsConstant.PLACEHOLDER.SENHA_ATUAL;
    readonly NOVA_SENHA = StringsConstant.PLACEHOLDER.NOVA_SENHA;
    readonly CONFIRMAR_SENHA = StringsConstant.PLACEHOLDER.CONFIRMAR_SENHA;
    readonly ALTERAR_SENHA = StringsConstant.LABELS.ALTERAR_SENHA;
    readonly CONFIRMAR = StringsConstant.LABELS.CONFIRMAR;

    formTrocaSenha: FormGroup;
    loading = false;
    senhaValida = true;
    senhaVisivel = false;
    senhaVisivel2 = false;
    senhaVisivel3 = false;

    background = ['background: #DFDFDF', 'background: #DFDFDF', 'background: #DFDFDF', 'background: #DFDFDF', 'color: #DFDFDF', ''];

    constructor(
        private fb: FormBuilder,
        private usuarioApi: UsuarioApi,
        private message: NzMessageService,
        private modal: NzModalService,
        private cdRef: ChangeDetectorRef,
        private autenticacaoService: AutenticacaoService,
        private forcaSenha: ForcaSenha
    ) {}

    ngOnInit() {
        const { required, minLength, maxLength } = CustomValidators;

        this.formTrocaSenha = this.fb.group({
            senhaAtual: [null, Validators.compose([required, minLength(6), maxLength(20)])],
            novaSenha: [null, Validators.compose([required, minLength(6), maxLength(20)])]
        });
    }

    ngAfterViewInit() {
        this.formTrocaSenha.controls.novaSenha.valueChanges.subscribe(val => {
            const vazio = [
                'background: #DFDFDF',
                'background: #DFDFDF',
                'background: #DFDFDF',
                'background: #DFDFDF',
                'color: #DFDFDF',
                ''
            ];
            const ruim = [
                'background: #ff4d4f',
                'background: #DFDFDF',
                'background: #DFDFDF',
                'background: #DFDFDF',
                'color: #ff4d4f',
                'Ruim'
            ];
            const fraca = [
                'background: orange',
                'background: orange',
                'background: #DFDFDF',
                'background: #DFDFDF',
                'color: orange',
                'Fraca'
            ];
            const boa = [
                'background: #0DB162',
                'background: #0DB162',
                'background: #0DB162',
                'background: #DFDFDF',
                'color: #0DB162',
                'Boa'
            ];
            const forte = [
                'background: #1861A7',
                'background: #1861A7',
                'background: #1861A7',
                'background: #1861A7',
                'color: #1861A7',
                'Forte'
            ];

            const nota = this.forcaSenha.vereficar(val);

            this.background = nota === 1 ? ruim : nota === 2 ? fraca : nota === 3 ? boa : nota === 4 ? forte : vazio;

            if (nota === 1) {
                this.formTrocaSenha.controls.novaSenha.setErrors({ incorrect: true });
            }
        });
    }

    submitForm() {
        const alterarSenhaPayloadDTO = new AlterarSenhaPayloadDTO(
            StorageHelper.codigoUsuario,
            StorageHelper.login || '',
            UtilHelper.senhaEncript(this.formTrocaSenha.value.novaSenha),
            UtilHelper.senhaEncript(this.formTrocaSenha.value.senhaAtual),
            UtilHelper.senhaEncript(this.formTrocaSenha.value.confirmarSenha)
        );

        this.modal.closeAll();
        this.loading = true;
        this.usuarioApi
            .trocarSenha(alterarSenhaPayloadDTO)
            .pipe(
                finalize(() => {
                    this.loading = false;
                    this.cdRef.detectChanges();
                })
            )
            .subscribe(
                sucesso => {
                    this.message.success(StringsConstant.MESSAGES.SENHA_ALTERADA_SUCESSO);
                    this.autenticacaoService.logout();
                },
                (excecao: ExcecaoServer) => {
                    this.message.error(excecao.mensagem);
                }
            );
    }

    conferirSenhas() {
        return this.formTrocaSenha.value.novaSenha === this.formTrocaSenha.value.confirmarSenha;
    }

    showConfirm(): void {
        const alterarSenhaPayloadDTO = new AlterarSenhaPayloadDTO(
            StorageHelper.codigoUsuario,
            StorageHelper.login || '',
            UtilHelper.senhaEncript(this.formTrocaSenha.value.novaSenha),
            UtilHelper.senhaEncript(this.formTrocaSenha.value.senhaAtual),
            UtilHelper.senhaEncript(this.formTrocaSenha.value.confirmarSenha)
        );

        this.usuarioApi.validarSenhaAtual(alterarSenhaPayloadDTO).subscribe(
            sucesso => {
                if (this.conferirSenhas()) {
                    this.senhaValida = true;
                    this.modal.confirm({
                        nzIconType: 'warning',
                        nzOkText: 'Sim',
                        nzCancelText: 'Não',
                        nzTitle: '<i>Confirmação</i>',
                        nzContent: StringsConstant.MSG_COMFIRM.COMFIRM_ALTERAR_SENHA,
                        nzOnOk: () => this.submitForm()
                    });
                } else {
                    this.senhaValida = false;
                }
            },
            (excecao: ExcecaoServer) => {
                this.message.error(excecao.mensagem);
            }
        );
    }
}
