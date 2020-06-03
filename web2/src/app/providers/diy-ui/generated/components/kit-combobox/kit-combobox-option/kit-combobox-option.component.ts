import {
	Component,
	OnInit,
	Input,
	ContentChild,
	ViewChild,
	ContentChildren,
	TemplateRef,
	HostBinding,
	HostListener,
	OnDestroy,
} from "@angular/core";
import { KitIconComponent } from "../../kit-icon/kit-icon.component";

@Component({
	selector: "kit-combobox-option",
	templateUrl: "./kit-combobox-option.component.html",
	styleUrls: ["./kit-combobox-option.component.scss"],
})
export class KitComboboxOptionComponent {
	@Input("value") value;
	@Input("text") text;

	@HostListener("click") onClick = () => {};

	@ContentChild(KitIconComponent, { static: false }) icon: any;

	constructor() {}
}
