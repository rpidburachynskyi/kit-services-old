import {
	Component,
	OnInit,
	Input,
	HostBinding,
	HostListener,
	OnChanges,
} from "@angular/core";

@Component({
	selector: "kit-icon-button",
	templateUrl: "./kit-icon-button.component.html",
	styleUrls: ["./kit-icon-button.component.scss"],
})
export class KitIconButtonComponent implements OnInit, OnChanges {
	@HostListener("click", ["$event"]) onClick(e: MouseEvent) {
		if (this._disabled) e.stopPropagation();
	}

	@HostBinding("style.border-radius") _radius: string = "0";
	@HostBinding("attr.disabled") _isDisabled: Boolean = false;

	@Input("circle") _circle: Boolean = true;

	@Input("disabled") _disabled: Boolean = false;

	constructor() {}

	ngOnInit() {
		if (this._circle) this._radius = "50%";
	}

	ngOnChanges() {
		this._isDisabled = this._disabled;
	}
}
