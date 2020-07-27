import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { UserPanelComponent } from "./user-panel/user-panel.component";
import { RouterModule } from "@angular/router";
import { ClickOutsideModule } from "ng-click-outside";
import { SharedModule } from "../app/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { KitModule } from "src/kit/kit.module";

@NgModule({
	declarations: [HeaderComponent, UserPanelComponent],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		KitModule,
		ClickOutsideModule,
	],
	exports: [HeaderComponent, FormsModule],
	providers: [],
})
export class HeaderModule {}
