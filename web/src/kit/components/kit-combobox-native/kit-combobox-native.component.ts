import {
	Component,
	OnInit,
	ContentChildren,
	QueryList,
	Input,
	Output,
	EventEmitter,
} from "@angular/core";
import { KitComboboxNativeOptionComponent } from "./kit-combobox-native-option/kit-combobox-native-option.component";

@Component({
	selector: "kit-combobox-native",
	templateUrl: "./kit-combobox-native.component.html",
	styleUrls: ["./kit-combobox-native.component.scss"],
})
export class KitComboboxNativeComponent implements OnInit {
	get value(): string {
		return this._value;
	}
	set value(value: string) {
		this._valueChange.emit(value);
	}

	@ContentChildren(KitComboboxNativeOptionComponent) options: QueryList<
		KitComboboxNativeOptionComponent
	>;

	@Input("value") _value: string;

	@Output("valueChange") _valueChange = new EventEmitter<string>();

	constructor() {}

	ngOnInit(): void {}

	al() {
		alert(1);
	}
}
