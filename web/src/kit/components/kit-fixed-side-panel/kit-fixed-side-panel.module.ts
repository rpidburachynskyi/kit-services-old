import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitFixedSidePanelComponent } from "./kit-fixed-side-panel.component";
import { KitFixedSidePanelHeaderComponent } from "./kit-fixed-side-panel-header.component";
import { KitFixedSidePanelContentComponent } from "./kit-fixed-side-panel-content.component";
import { KitFixedSidePanelFooterComponent } from "./kit-fixed-side-panel-footer.component";
import { KitTextModule } from "../kit-text/kit-text.module";

@NgModule({
	declarations: [
		KitFixedSidePanelComponent,
		KitFixedSidePanelHeaderComponent,
		KitFixedSidePanelContentComponent,
		KitFixedSidePanelFooterComponent,
	],
	imports: [CommonModule, KitTextModule],
	exports: [
		KitFixedSidePanelComponent,
		KitFixedSidePanelHeaderComponent,
		KitFixedSidePanelContentComponent,
		KitFixedSidePanelFooterComponent,
	],
	providers: [],
})
export class KitFixedSidePanelModule {}
