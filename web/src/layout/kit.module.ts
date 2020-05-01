import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitComboboxComponent } from './kit/kit-combobox/kit-combobox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitTextFieldComponent } from './kit/kit-text-field/kit-text-field.component';
import { KitButtonComponent } from './kit/kit-button/kit-button.component';
import { KitToggleComponent } from './kit/kit-toggle/kit-toggle.component';

@NgModule({
    declarations: [
        KitComboboxComponent,
        KitTextFieldComponent,
        KitButtonComponent,
        KitToggleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        KitComboboxComponent,
        KitTextFieldComponent,
        KitButtonComponent,
        KitToggleComponent
    ],
    providers: [],
})
export class KitModule { }