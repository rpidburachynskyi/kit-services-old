import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitIconButtonComponent } from "./kit-icon-button.component";
import { KitIconModule } from "../kit-icon/kit-icon.module";

@NgModule({
	declarations: [KitIconButtonComponent],
	imports: [CommonModule],
	exports: [KitIconButtonComponent],
	providers: [],
})
export class KitIconButtonModule {}
