import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import { EyeInvisibleOutline, EyeOutline, LockOutline, MailOutline } from '@ant-design/icons-angular/icons';
import { ButtonComponent } from '@shared/components/button/button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

const icons: Array<IconDefinition> = [EyeOutline, EyeInvisibleOutline, LockOutline, MailOutline];

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, NzButtonModule],
    exports: [ButtonComponent]
})
export class ButtonModule {}
