import {
	Component,
	OnInit,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Output,
	EventEmitter,
	Input,
} from "@angular/core";
import { KitRadioComponent } from "../kit-radio.component";

@Component({
	selector: "kit-radio-group",
	templateUrl: "./kit-radio-group.component.html",
	styleUrls: ["./kit-radio-group.component.scss"],
})
export class KitRadioGroupComponent implements AfterContentInit {
	@ContentChildren(KitRadioComponent) radios: QueryList<
		KitRadioComponent
	>;

	private _value;

	@Input() set value(value: string) {
		this._value = value;
		this.checkByValue();
	}

	@Output() valueChange = new EventEmitter<string>(false);

	constructor() {}

	ngAfterContentInit(): void {
		this.checkByValue();
		this.radios.forEach((radio) => {
			radio.checkedChange.subscribe((isChecked) => {
				if (!isChecked) return true;

				if (this._value) {
					this.valueChange.emit(radio.value);
				} else {
					this.uncheckAllExceptOne(radio, false);
				}
			});
		});
	}

	uncheckAllExceptOne(component: KitRadioComponent, force: boolean) {
		this.radios.forEach((radio) => {
			if (radio === component) return;
			if (!radio.checked) return;

			if (force) radio.checked = false;
			else radio.checkedChange.emit(false);
		});
	}

	checkByValue() {
		if (!this._value) return;
		if (!!this.radios) {
			const currentRadio = this.radios.find(
				(r) => r.value === this._value
			);
			if (currentRadio) {
				this.uncheckAllExceptOne(currentRadio, true);
				currentRadio.checked = true;
			}
		}
	}
}
