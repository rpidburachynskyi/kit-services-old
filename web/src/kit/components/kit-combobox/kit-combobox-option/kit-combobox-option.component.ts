import { Component, Input, ContentChild, HostListener } from "@angular/core";
import { KitIconComponent } from "../../kit-icon/kit-icon.component";

@Component({
	selector: "kit-combobox-option",
	templateUrl: "./kit-combobox-option.component.html",
	styleUrls: ["./kit-combobox-option.component.scss"],
})
export class KitComboboxOptionComponent {
	@Input("text") text: string = "";
	@Input("value") value;

	@HostListener("click") onClick = () => {};

	@ContentChild(KitIconComponent, { static: false }) icon: any;

	constructor() {}
}
