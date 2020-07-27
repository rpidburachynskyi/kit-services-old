import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitTabsComponent } from "./kit-tabs.component";
import { KitTabComponent } from "./kit-tab/kit-tab.component";

@NgModule({
	declarations: [KitTabComponent, KitTabsComponent],
	imports: [CommonModule],
	exports: [KitTabComponent, KitTabsComponent],
	providers: [],
})
export class KitTabsModule {}
