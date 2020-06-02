import {
	Component,
	forwardRef,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ElementRef,
	AfterContentChecked,
	OnChanges,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { KitComboboxOptionComponent } from "./kit-combobox-option/kit-combobox-option.component";
import {
	trigger,
	state,
	style,
	transition,
	animate,
} from "@angular/animations";
import { KitDividerComponent } from "../kit-divider/kit-divider.component";
import { KitComboboxOptionGroupComponent } from "./kit-combobox-option-group/kit-combobox-option-group.component";

export type Option = KitComboboxOptionComponent | KitDividerComponent;

@Component({
	selector: "kit-combobox",
	templateUrl: "./kit-combobox.component.html",
	styleUrls: ["./kit-combobox.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => KitComboboxComponent),
			multi: true,
		},
	],
	animations: [
		trigger("listState", [
			state(
				"opened",
				style({
					height: "*",
					transform: "translateY(40px)",
				})
			),
			state(
				"closed",
				style({
					height: "0",
				})
			),
			transition("closed=>opened", animate("100ms")),
			transition("opened=>closed", animate("100ms")),
		]),
	],
})
export class KitComboboxComponent
	implements ControlValueAccessor, AfterContentChecked {
	@ContentChildren(KitComboboxOptionGroupComponent) _groups: QueryList<
		KitComboboxOptionGroupComponent
	>;
	@ContentChildren(KitComboboxOptionComponent, { descendants: true })
	_sss: QueryList<KitComboboxOptionComponent>; // TODO

	private _value: string;

	get value(): string {
		return this._value;
	}

	set value(value: string) {
		if (value === this._value) return;

		this._value = value;
		this.onChange(value);
	}

	get optionValue(): KitComboboxOptionComponent {
		return this._sss
			.toArray()
			.find((option) => option.value === this.value);
	}

	get groups(): KitComboboxOptionGroupComponent[] {
		return this._groups.toArray();
	}

	opened: Boolean = false;

	constructor() {}

	onChange = (_) => {};

	ngAfterContentChecked() {
		this._sss.toArray().forEach((option) => {
			option.onClick = () => {
				this.selectOption(option);
			};
		});
	}
	private onTouched = () => {};

	registerOnChange(f: any) {
		this.onChange = f;
	}
	registerOnTouched(f: any) {
		this.onTouched = f;
	}
	setDisabledState(isDisabled: Boolean) {
		throw new Error("Method not implements");
	}
	writeValue(value: string) {
		this.value = value;
	}

	selectOption(option: KitComboboxOptionComponent) {
		this.value = option.value;
		this.opened = false;
	}
}
