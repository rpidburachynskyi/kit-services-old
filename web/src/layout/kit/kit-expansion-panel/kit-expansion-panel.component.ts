import { Component, OnInit, Input, HostBinding } from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes,
} from "@angular/animations";
import { KitLocalState } from "../extends/kit-local-state";

@Component({
	selector: "kit-expansion-panel",
	templateUrl: "./kit-expansion-panel.component.html",
	styleUrls: ["./kit-expansion-panel.component.scss"],

	animations: [
		trigger("content", [
			state(
				"opened",
				style({
					height: "*",
					padding: "10px",
				})
			),
			state(
				"closed",
				style({
					height: 0,
					padding: "0 10px",
				})
			),
			transition("opened => closed", animate("200ms")),
			transition("closed => opened", animate("200ms")),
		]),
		trigger("element", [
			state(
				"opened",
				style({
					height: "*",
				})
			),
			state(
				"closed",
				style({
					height: 0,
				})
			),
			transition("opened => closed", animate("200ms")),
			transition("closed => opened", animate("200ms")),
		]),
	],
})
export class KitExpansionPanelComponent extends KitLocalState
	implements OnInit {
	private _opened: boolean = false;

	get opened(): boolean {
		return this._opened;
	}
	set opened(value: boolean) {
		this._opened = value;
		this.localWrite("opened", value);
	}

	@Input("title") title: string = "";
	@Input("scroll") scroll: boolean = true;
	@Input("disabled") disabled: boolean = false;

	@HostBinding("attr.disabled") _disabled: boolean = false;

	constructor() {
		super();
	}

	ngOnInit() {
		this._disabled = this.disabled;
		this.opened = this.localRead("opened", false);
	}

	onClickHeader() {
		if (!this.disabled) this.opened = !this.opened;
	}
}
