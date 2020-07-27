import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitExpansionPanelComponent } from "./kit-expansion-panel.component";
import { KitTextModule } from "../kit-text/kit-text.module";
import { KitIconModule } from "../kit-icon/kit-icon.module";

@NgModule({
	declarations: [KitExpansionPanelComponent],
	imports: [CommonModule, KitTextModule, KitIconModule],
	exports: [KitExpansionPanelComponent],
	providers: [],
})
export class KitExpansionPanelModule {}
