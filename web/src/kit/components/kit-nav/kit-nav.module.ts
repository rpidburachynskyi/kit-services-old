import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitNavComponent } from "./kit-nav.component";
import { KitNavItemComponent } from "./kit-nav-item/kit-nav-item.component";

@NgModule({
	declarations: [KitNavComponent, KitNavItemComponent],
	imports: [CommonModule],
	exports: [KitNavComponent, KitNavItemComponent],
	providers: [],
})
export class KitNavModule {}
