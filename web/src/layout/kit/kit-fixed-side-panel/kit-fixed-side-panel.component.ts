import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { KitLocalState } from '../extends/kit-local-state';

@Component({
	selector: 'kit-fixed-side-panel',
	templateUrl: './kit-fixed-side-panel.component.html',
	styleUrls: ['./kit-fixed-side-panel.component.scss'],
	animations: [
		trigger("contentState", [
			state("opened", style({
				height: "*",
			})),
			state("closed", style({
				height: '0',
			})),
			transition("opened => closed", animate("300ms")),
			transition("closed => opened", animate("300ms"))
		])
	]
})
export class KitFixedSidePanelComponent extends KitLocalState implements OnInit, OnDestroy {

	private _opened: boolean;

	get opened(): boolean { return this._opened; }
	set opened(value: boolean) {
		this._opened = value;
		this.localWrite("opened", value);

	}

	constructor() {
		super();
	}

	ngOnInit() {
		this._opened = this.localRead("opened", false);
	}

	ngOnDestroy() {
	}
}
