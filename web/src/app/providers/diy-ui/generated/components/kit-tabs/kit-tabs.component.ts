import {
	Component,
	ContentChildren,
	QueryList,
	Input,
	Output,
	EventEmitter,
} from "@angular/core";
import { KitTabComponent } from "./kit-tab/kit-tab.component";

@Component({
	selector: "kit-tabs",
	templateUrl: "./kit-tabs.component.html",
	styleUrls: ["./kit-tabs.component.scss"],
})
export class KitTabsComponent {
	@ContentChildren(KitTabComponent) tabs: QueryList<KitTabComponent>;

	@Input("tabIndex") _tabIndex = 0;
	@Output("tabIndex") _tabIndexChange = new EventEmitter();

	constructor() {}

	changeTabIndex(index: number) {
		this._tabIndexChange.emit(index);
	}
}
