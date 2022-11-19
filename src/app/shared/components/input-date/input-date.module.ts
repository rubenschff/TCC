import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { EyeInvisibleOutline, EyeOutline, LockOutline, MailOutline } from '@ant-design/icons-angular/icons';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputDateComponent } from './input-date.component';

const icons: Array<IconDefinition> = [EyeOutline, EyeInvisibleOutline, LockOutline, MailOutline];

@NgModule({
    declarations: [InputDateComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NzIconModule.forChild(icons), NzDatePickerModule],
    exports: [InputDateComponent]
})
export class InputDateModule {}
