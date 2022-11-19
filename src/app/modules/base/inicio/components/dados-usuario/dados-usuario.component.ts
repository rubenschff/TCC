import { NzMessageService } from 'ng-zorro-antd';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs/operators';
import { StyleRenderer } from '@alyle/ui';
import { ImgCropperConfig, ImgCropperErrorEvent, ImgCropperEvent, LyImageCropper } from '@alyle/ui/image-cropper';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioApi } from '@core/api/usuario.api';
import { AutenticacaoService } from '@core/services/autenticacao.service';
import { StringsConstant } from '@static/constants/strings.constant';
import { InputTextEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { StorageHelper } from '@static/helpers/storage.helper';
import { ExcecaoServer } from '@static/models/excecao-server.model';
import { CustomValidators } from '@static/validators/custom-validators.validator';

@Component({
    templateUrl: './dados-usuario.component.html',
    styleUrls: ['./dados-usuario.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [StyleRenderer]
})
export class DadosUsuarioComponent implements OnInit, AfterViewInit {
    _inputTextTipoEnum = InputTextTipoEnum;
    _inputTextEstadoEnum = InputTextEstadoEnum;

    COMFIRM_EXCLUIR_CONTA = StringsConstant.MSG_COMFIRM.COMFIRM_EXCLUIR_CONTA;
    ATENCAO = StringsConstant.TITLE_CONFIRM.ATENCAO;

    readonly MEUS_DADOS = StringsConstant.LABELS.MEUS_DADOS;
    readonly LABEL_NOME = StringsConstant.LABELS.NOME;
    readonly LABEL_CNPJ = StringsConstant.LABELS.CNPJ;
    readonly LABEL_EMAIL = StringsConstant.LABELS.EMAIL;
    readonly TERMOS_USO = StringsConstant.LABELS.TERMOS_USO;
    readonly POLITICA_PRIVACIDADE = StringsConstant.LABELS.POLITICA_PRIVACIDADE;
    readonly POLITICA_COOKIES = StringsConstant.LABELS.POLITICA_COOKIES;
    readonly EXCLUIR_CONTA = StringsConstant.LABELS.EXCLUIR_CONTA;
    readonly TOOLTIP_EXCLUIR_CONTA = StringsConstant.TOOLTIPS.EXCLUIR_CONTA;
    readonly FECHAR = StringsConstant.LABELS.FECHAR;

    readonly EMAIL = StorageHelper.login;
    readonly NOME = StorageHelper.nomeUsuario;
    readonly CNPJ = StorageHelper.cnpjTransacionador;

    formTrocaSenha: FormGroup;
    requesting = false;
    senhaValida = true;

    form: FormGroup;
    nome = '';
    cnpj = '';
    email = '';

    imagem?: string;
    ready: boolean;
    @ViewChild(LyImageCropper, { static: true }) readonly cropper: LyImageCropper;

    myConfig: ImgCropperConfig = {
        width: 144,
        height: 144,
        fill: '#ff2997', // Default transparent if type = png else #000
        type: 'image/jpeg', // Or you can also use `image/jpeg`
        round: true,
        autoCrop: true
    };

    constructor(
        private modal: NzModalService,
        private message: NzMessageService,
        private usuarioApi: UsuarioApi,
        private autenticacaoService: AutenticacaoService,
        private fb: FormBuilder,
        readonly sRenderer: StyleRenderer,
        private _platform: Platform
    ) {}

    ngOnInit() {
        const { required, email } = CustomValidators;

        this.nome = StorageHelper.nomeUsuario;
        this.cnpj = StorageHelper.cnpjTransacionador;
        this.email = StorageHelper.login;
        this.imagem = StorageHelper.imagemUsuario;

        this.form = this.fb.group({
            nome: [this.nome, Validators.compose([required])],
            email: [this.email, Validators.compose([required, email])]
        });

        this.cropper.setImageUrl(this.imagem);
    }

    ngAfterViewInit() {}

    submitForm() {
        this.requesting = true;
        this.usuarioApi
            .alterarDadosUsuario(StorageHelper.codigoUsuario, this.form.value.nome, this.form.value.email, this.imagem)
            .subscribe(
                retorno => {
                    this.requesting = false;
                    StorageHelper.atualizarDadosUsuario(retorno.nome, retorno.email, retorno.imagem);
                },
                (excecao: ExcecaoServer) => this.message.error(excecao.mensagem, { nzDuration: 6000 })
            );
    }

    onCropped(e: ImgCropperEvent) {
        this.imagem = e.dataURL;
    }
    onLoaded(e: ImgCropperEvent) {
        console.log('img loaded', e);
    }
    onError(e: ImgCropperErrorEvent) {
        console.warn(`'${e.name}' is not a valid image`, e);
    }
}
