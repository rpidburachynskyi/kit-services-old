import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { UserPanelComponent } from "./user-panel/user-panel.component";
import { RouterModule } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { DiyUiModule } from "../app/providers/diy-ui/diy-ui.module";
import { SharedModule } from "../app/shared/shared.module";

@NgModule({
	declarations: [HeaderComponent, UserPanelComponent],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		DiyUiModule,
		ClickOutsideModule,
	],
	exports: [HeaderComponent],
	providers: [],
})
export class HeaderModule {}
