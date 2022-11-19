import { NzIconService } from 'ng-zorro-antd';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AutenticacaoService } from '@core/services/autenticacao.service';
import { DadosUsuarioComponent } from '@modules/base/inicio/components/dados-usuario/dados-usuario.component';
import { TrocarSenhaComponent } from '@modules/base/inicio/components/trocar-senha/trocar-senha.component';
import { RotasConstant } from '@static/constants/rotas.constant';
import { StringsConstant } from '@static/constants/strings.constant';
import { StorageHelper } from '@static/helpers/storage.helper';

@Component({
    selector: 'ac-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioComponent implements OnInit {
    @ViewChild('inputFile', { static: true }) inputFile: ElementRef<HTMLInputElement>;

    readonly TROCAR_SENHA = StringsConstant.LABELS.TROCAR_SENHA;
    readonly ALTERAR_EMAIL = StringsConstant.LABELS.ALTERAR_EMAIL;
    readonly MEUS_DADOS = StringsConstant.LABELS.L_MEUS_DADOS;
    readonly SAIR = StringsConstant.LABELS.SAIR;
    readonly EMAIL = StorageHelper.login;
    readonly NOME = StorageHelper.nomeUsuario;

    modalRef: NzModalRef;

    constructor(
        private autenticacaoService: AutenticacaoService,
        private modal: NzModalService,
        private viewContainerRef: ViewContainerRef,
        private iconService: NzIconService
    ) {}

    ngOnInit() {}

    sair = () => this.autenticacaoService.logout();

    abrirModalTrocarSenha() {
        this.modal.create({
            nzTitle: '',
            nzContent: TrocarSenhaComponent,
            nzViewContainerRef: this.viewContainerRef,
            nzWidth: '450',
            nzFooter: null,
            nzCloseIcon: 'close-circle'
        });
    }

    abrirModalDadosUsuario() {
        this.modalRef = this.modal.create({
            nzTitle: 'Minha conta',
            nzContent: DadosUsuarioComponent,
            nzWidth: '604',
            nzWrapClassName: 'modal-padrao dados-usuario',
            nzFooter: [
                {
                    label: StringsConstant.FORM_LABELS.AGENDAR,
                    type: 'primary',
                    size: 'large',
                    show: () => true,
                    disabled: () => false,
                    loading: () => false,
                    onClick: (comp: DadosUsuarioComponent) => {
                        comp.submitForm();
                        this.modalRef.destroy();
                    }
                },
                {
                    label: StringsConstant.FORM_LABELS.FECHAR,
                    type: 'default',
                    size: 'large',
                    onClick: () => this.modalRef.destroy()
                }
            ]
        });
    }
}
