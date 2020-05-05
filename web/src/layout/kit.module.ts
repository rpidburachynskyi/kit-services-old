import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitComboboxComponent } from './kit/kit-combobox/kit-combobox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitTextFieldComponent } from './kit/kit-text-field/kit-text-field.component';
import { KitButtonComponent } from './kit/kit-button/kit-button.component';
import { KitToggleComponent } from './kit/kit-toggle/kit-toggle.component';
import { KitComboboxOptionComponent } from './kit/kit-combobox/kit-combobox-option/kit-combobox-option.component';
import { KitIconComponent } from './kit/kit-icon/kit-icon.component';
import { KitTabsComponent } from './kit/kit-tabs/kit-tabs.component';
import { KitTabComponent } from './kit/kit-tab/kit-tab.component';
import { KitIconButtonComponent } from './kit/kit-icon-button/kit-icon-button.component';

@NgModule({
    declarations: [
        KitComboboxComponent,
        KitTextFieldComponent,
        KitButtonComponent,
        KitToggleComponent,
        KitComboboxOptionComponent,
        KitIconComponent,
        KitTabsComponent,
        KitTabComponent,
        KitIconButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        KitComboboxComponent,
        KitComboboxOptionComponent,
        KitTextFieldComponent,
        KitButtonComponent,
        KitToggleComponent,
        KitIconComponent,
        KitTabsComponent,
        KitTabComponent,
        KitIconButtonComponent
    ],
    providers: [],
})
export class KitModule { }