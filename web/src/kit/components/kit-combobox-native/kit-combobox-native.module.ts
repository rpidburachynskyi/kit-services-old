import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitComboboxNativeOptionComponent } from "./kit-combobox-native-option/kit-combobox-native-option.component";
import { KitComboboxNativeComponent } from "./kit-combobox-native.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		KitComboboxNativeComponent,
		KitComboboxNativeOptionComponent,
	],
	imports: [CommonModule, FormsModule],
	exports: [KitComboboxNativeComponent, KitComboboxNativeOptionComponent],
})
export class KitComboboxNativeModule {}
