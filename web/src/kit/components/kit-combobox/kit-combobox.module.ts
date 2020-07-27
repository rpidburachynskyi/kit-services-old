import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitComboboxComponent } from "./kit-combobox.component";
import { KitComboboxOptionComponent } from "./kit-combobox-option/kit-combobox-option.component";
import { KitComboboxActiveOptionComponent } from "./kit-combobox-option/kit-combobox-active-option.component";
import { KitComboboxOptionGroupComponent } from "./kit-combobox-option-group/kit-combobox-option-group.component";
import { KitIconModule } from "../kit-icon/kit-icon.module";

@NgModule({
	declarations: [
		KitComboboxComponent,
		KitComboboxOptionComponent,
		KitComboboxOptionGroupComponent,
		KitComboboxActiveOptionComponent,
	],
	imports: [CommonModule, KitIconModule],
	exports: [
		KitComboboxComponent,
		KitComboboxOptionComponent,
		KitComboboxOptionGroupComponent,
		KitComboboxActiveOptionComponent,
	],
	providers: [],
})
export class KitComboboxModule {}
