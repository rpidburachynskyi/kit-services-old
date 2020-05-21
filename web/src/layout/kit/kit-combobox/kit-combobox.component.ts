import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { iKitComboboxOption } from '../../models/iKitComboboxOption.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { KitComboboxOptionComponent } from './kit-combobox-option/kit-combobox-option.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'kit-combobox',
	templateUrl: './kit-combobox.component.html',
	styleUrls: ['./kit-combobox.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => KitComboboxComponent),
			multi: true
		}
	],
	animations: [
		trigger("listState", [
			state("opened", style({
				width: "170px",
				height: "*",
				transform: "scale(1.4) translateY(15%)",
			})),
			state("closed", style({
				height: "0"
			})),
			transition("*=>opened", animate("100ms")),
			transition("*=>closed", animate("100ms"))
		])
	]
})
export class KitComboboxComponent implements ControlValueAccessor {

	@ContentChildren(KitComboboxOptionComponent) _ss: QueryList<KitComboboxOptionComponent>;


	private _value: string;

	public get value(): string { return this._value; };

	public set value(value: string) {
		if (value === this._value) return;

		this._value = value;
		this.onChange(value);
	};

	get options(): KitComboboxOptionComponent[] { return this._ss.toArray(); }
	get optionValue(): KitComboboxOptionComponent { return this._ss.find(c => c.value === this.value); }

	opened: Boolean = false;

	constructor() { }

	onChange = (_) => { };

	private onTouched = () => { };

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