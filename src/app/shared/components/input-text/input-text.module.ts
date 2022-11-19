import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { EyeInvisibleOutline, EyeOutline, LockOutline, MailOutline } from '@ant-design/icons-angular/icons';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';

const icons: Array<IconDefinition> = [EyeOutline, EyeInvisibleOutline, LockOutline, MailOutline];

@NgModule({
    declarations: [InputTextComponent],
    imports: [CommonModule, NzInputModule, FormsModule, ReactiveFormsModule, NzIconModule.forChild(icons)],
    exports: [InputTextComponent]
})
export class InputTextModule {}
