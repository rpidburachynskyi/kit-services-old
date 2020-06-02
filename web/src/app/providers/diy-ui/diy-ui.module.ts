import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { KitButtonModule } from "./generated/components/kit-button/kit-button.module";
import { KitComboboxModule } from "./generated/components//kit-combobox/kit-combobox.module";
import { KitDividerModule } from "./generated/components//kit-divider/kit-divider.module";
import { KitExpansionPanelModule } from "./generated/components//kit-expansion-panel/kit-expansion-panel.module";
import { KitFixedSidePanelModule } from "./generated/components//kit-fixed-side-panel/kit-fixed-side-panel.module";
import { KitIconModule } from "./generated/components//kit-icon/kit-icon.module";
import { KitIconButtonModule } from "./generated/components//kit-icon-button/kit-icon-button.module";
import { KitInputFileModule } from "./generated/components//kit-input-file/kit-input-file.module";
import { KitInputFilesGroupModule } from "./generated/components//kit-input-files-group/kit-input-files-group.module";
import { KitLabelModule } from "./generated/components//kit-label/kit-label.module";
import { KitModalDialogModule } from "./generated/components//kit-modal-dialog/kit-modal-dialog.module";
import { KitSnackbarModule } from "./generated/components//kit-snackbar/kit-snackbar.module";
import { KitTabsModule } from "./generated/components//kit-tabs/kit-tabs.module";
import { KitTextModule } from "./generated/components//kit-text/kit-text.module";
import { KitTextFieldModule } from "./generated/components//kit-text-field/kit-text-field.module";
import { KitToggleModule } from "./generated/components/kit-toggle/kit-toggle.module";

@NgModule({
	declarations: [],
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
	],
	providers: [],
})
export class DiyUiModule {}
