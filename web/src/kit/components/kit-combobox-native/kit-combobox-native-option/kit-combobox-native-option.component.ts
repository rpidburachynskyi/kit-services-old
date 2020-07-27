import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "kit-combobox-native-option",
	templateUrl: "./kit-combobox-native-option.component.html",
	styleUrls: ["./kit-combobox-native-option.component.scss"],
})
export class KitComboboxNativeOptionComponent implements OnInit {
	@Input("value") value: string;
	@Input("text") text: string;

	constructor() {}

	ngOnInit(): void {}
}
