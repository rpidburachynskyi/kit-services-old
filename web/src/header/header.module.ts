import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderComponent } from "./header.component";
import { UserPanelComponent } from "./user-panel/user-panel.component";
import { KitModule } from "src/layout/kit.module";
import { RouterModule } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";

@NgModule({
	declarations: [HeaderComponent, UserPanelComponent],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		KitModule,
		ClickOutsideModule,
	],
	exports: [HeaderComponent],
	providers: [],
})
export class HeaderModule {}
