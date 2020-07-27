import {
	Component,
	Input,
	ContentChild,
	HostBinding,
	HostListener,
} from "@angular/core";
import { KitIconComponent } from "../../kit-icon/kit-icon.component";

@Component({
	selector: "kit-combobox-active-option",
	templateUrl: "./kit-combobox-option.component.html",
	styleUrls: ["./kit-combobox-option.component.scss"],
})
export class KitComboboxActiveOptionComponent {
	@Input("value") value;

	@HostListener("click") onClick = () => {};

	@ContentChild(KitIconComponent, { static: false }) icon: any;

	constructor() {}
}
