import { NzDrawerService } from 'ng-zorro-antd';
import { Component } from '@angular/core';
import { NotificacoesComponent } from '@modules/base/inicio/components/notificacoes/notificacoes.component';
@Component({
    selector: 'ac-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    readonly LOGO_SYSMO = 'assets/imagens/logoInterna.png';

    constructor(private drawerService: NzDrawerService) {}

    abrirNotificacoes() {
        this.drawerService.create<NotificacoesComponent>({
            nzTitle: 'Notificações',
            nzContent: NotificacoesComponent,
            nzMaskClosable: true,
            nzWidth: 360,
            nzWrapClassName: 'drawer-lateral'
        });
    }
}
