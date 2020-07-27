import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitButtonModule } from "./components/kit-button/kit-button.module";
import { KitComboboxModule } from "./components/kit-combobox/kit-combobox.module";
import { KitDividerModule } from "./components/kit-divider/kit-divider.module";
import { KitExpansionPanelModule } from "./components/kit-expansion-panel/kit-expansion-panel.module";
import { KitFixedSidePanelModule } from "./components/kit-fixed-side-panel/kit-fixed-side-panel.module";
import { KitIconModule } from "./components/kit-icon/kit-icon.module";
import { KitIconButtonModule } from "./components/kit-icon-button/kit-icon-button.module";
import { KitInputFileModule } from "./components/kit-input-file/kit-input-file.module";
import { KitInputFilesGroupModule } from "./components/kit-input-files-group/kit-input-files-group.module";
import { KitLabelModule } from "./components/kit-label/kit-label.module";
import { KitModalDialogModule } from "./components/kit-modal-dialog/kit-modal-dialog.module";
import { KitSnackbarModule } from "./components/kit-snackbar/kit-snackbar.module";
import { KitTabsModule } from "./components/kit-tabs/kit-tabs.module";
import { KitTextModule } from "./components/kit-text/kit-text.module";
import { KitTextFieldModule } from "./components/kit-text-field/kit-text-field.module";
import { KitToggleModule } from "./components/kit-toggle/kit-toggle.module";
import { KitComboboxNativeModule } from "./components/kit-combobox-native/kit-combobox-native.module";

@NgModule({
	imports: [
		CommonModule,
		KitButtonModule,
		KitComboboxModule,
		KitDividerModule,
		KitExpansionPanelModule,
		KitFixedSidePanelModule,
		KitIconModule,
		KitIconButtonModule,
		KitInputFileModule,
		KitInputFilesGroupModule,
		KitLabelModule,
		KitModalDialogModule,
		KitSnackbarModule,
		KitTabsModule,
		KitTextModule,
		KitTextFieldModule,
		KitToggleModule,
		KitButtonModule,
	],
	exports: [
		KitButtonModule,
		KitComboboxModule,
		KitDividerModule,
		KitExpansionPanelModule,
		KitFixedSidePanelModule,
		KitIconModule,
		KitIconButtonModule,
		KitInputFileModule,
		KitInputFilesGroupModule,
		KitLabelModule,
		KitModalDialogModule,
		KitSnackbarModule,
		KitTabsModule,
		KitTextModule,
		KitTextFieldModule,
		KitToggleModule,
		KitButtonModule,
		KitComboboxNativeModule,
	],
})
export class KitModule {}
