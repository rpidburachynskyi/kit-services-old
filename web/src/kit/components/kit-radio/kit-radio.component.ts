import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "kit-radio",
	templateUrl: "./kit-radio.component.html",
	styleUrls: ["./kit-radio.component.scss"],
})
export class KitRadioComponent implements OnInit {
	private _checked: boolean = false;
	get checked(): boolean {
		return this._checked;
	}
	@Input() set checked(value) {
		this._checked = value;
	}

	@Output() checkedChange = new EventEmitter<boolean>();

	@Input() value: string;

	constructor() {}

	ngOnInit(): void {}

	onClick() {
		if (this.checked) return;
		this.checkedChange.emit(true);
	}
}
