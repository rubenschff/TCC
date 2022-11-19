import { NzDropdownMenuComponent, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacaoApi } from '@core/api/notificacao.api';
import { UsuarioApi } from '@core/api/usuario.api';
import { NotificacaoService } from '@core/services/notificacao.service';
import { RotasConstant } from '@static/constants/rotas.constant';
import { StringsConstant } from '@static/constants/strings.constant';
import { StorageHelper } from '@static/helpers/storage.helper';
import { RedirecionarAgendamentoDTO } from '@static/models/agendamentos/redirecionar-agendamento.dto';
import { NotificacaoDTO } from '@static/models/notificacao/notificacao.dto';

@Component({
    selector: 'ac-notificacoes',
    templateUrl: './notificacoes.component.html',
    styleUrls: ['./notificacoes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificacoesComponent implements OnInit {
    @ViewChild('menu', { static: true }) menu: ElementRef<NzDropdownMenuComponent>;

    notificacoes: Array<NotificacaoDTO>;
    disabled = false;
    menuVisivel = false;
    btnMaisDisabled = true;
    avatar = 'StorageHelper.avatar';
    bullet = '0';

    readonly NAO_HA_NOTIFICACAO = StringsConstant.LABELS.NAO_HA_NOTIFICACAO;
    readonly LIMPAR_NOTIFICACAO = StringsConstant.LABELS.LIMPAR_NOTIFICACAO;
    readonly NOTAS = StringsConstant.LABELS.NOTAS;
    readonly NOTIFICACOES = StringsConstant.LABELS.NOTIFICACOES;

    constructor(
        private notificacaoApi: NotificacaoApi,
        private cdRef: ChangeDetectorRef,
        private router: Router,
        private modalService: NzModalService,
        private notificacaoService: NotificacaoService,
        private usuarioApi: UsuarioApi,
        private messageService: NzMessageService
    ) {}

    ngOnInit() {
        setTimeout(() => {
            this.atualizarDados(true);

            this.cdRef.detectChanges();
        }, 100);

        this.notificacaoService.getNotificacao().subscribe(value => {
            this.notificacoes = value;
        });

        this.notificacaoService.getBulet().subscribe(value => {
            this.bullet = value;
        });

        this.notificacaoService.getDisabled().subscribe(() => {
            this.disabled = false;
        });

        this.notificacaoService.getBtnMaisDisabled().subscribe(value => {
            this.btnMaisDisabled = value;
        });

        this.notificacaoService.getChangeEvent().subscribe(() => {
            this.cdRef.detectChanges();
        });
    }

    atualizarDados(reiniciar?: boolean) {
        this.notificacaoService.atualizarDados(reiniciar);
    }

    carregarMaisNotificacoes() {
        this.notificacaoService.carregarMaisNotificacoes();
    }

    abrirNotificacao(item: NotificacaoDTO, excluir?: boolean) {
        const parametrosDTO = item.notificacaoParametrosDTO;

        this.notificacaoApi.lerNotificacao(item.id, excluir).subscribe(() => {
            if (!excluir) {
                if (!!parametrosDTO.codigoAgenda) {
                    const redirecionarAgenda: RedirecionarAgendamentoDTO = parametrosDTO;

                    StorageHelper.setDadosRedirecionarAgendamento(redirecionarAgenda);
                    StorageHelper.setIdCliente(parametrosDTO.codigoCliente);
                    StorageHelper.setUrlImagem(parametrosDTO.urlImagem);
                    this.router.navigate([`${RotasConstant.INICIO}/${RotasConstant.AGENDAMENTOS}`], {
                        queryParams: { atualizarDadosCalendario: true }
                    });
                } else {
                    this.modalService.confirm({
                        nzContent: StringsConstant.MSG_COMFIRM.COMFIRM_APROVAR_USUARIO,
                        nzOkText: StringsConstant.FORM_LABELS.APROVAR,
                        nzOkType: 'primary',
                        nzCancelText: StringsConstant.FORM_LABELS.SAIR,
                        nzOnOk: () => {
                            this.usuarioApi.aprovarUsuario(parametrosDTO.codigoNovoUsuario, item.id).subscribe(
                                () => {
                                    this.messageService.success(StringsConstant.MESSAGES.APROVAR_USUARIO_SUCESSO);
                                    this.atualizarDados();
                                },
                                () => {
                                    this.messageService.error(StringsConstant.MESSAGES.APROVAR_USUARIO_ERRO);
                                }
                            );
                        }
                    });
                }
            }

            this.atualizarDados();
        });
    }

    limparNotificacao() {
        this.notificacaoApi.lerTodasNotificacoes().subscribe(bolleano => {
            if (bolleano.valor) {
                this.bullet = '0';
                this.notificacoes = [];
                this.disabled = false;
                this.cdRef.detectChanges();
            }
        });
    }
}
