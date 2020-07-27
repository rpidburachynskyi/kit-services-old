import {
	Component,
	OnInit,
	Input,
	HostBinding,
	HostListener,
	ElementRef,
} from "@angular/core";
import { iKitSnackbarNotification } from "../models/iKitSnackbarNotification";
import {
	trigger,
	style,
	state,
	transition,
	animate,
	keyframes,
} from "@angular/animations";
import { translateState } from "./states/translate.state";
import { fadeState } from "./states/fade.state";

@Component({
	selector: "kit-snackbar-notification",
	templateUrl: "./kit-snackbar-notification.component.html",
	styleUrls: ["./kit-snackbar-notification.component.scss"],

	animations: [trigger("thisState", [...translateState, ...fadeState])],
})
export class KitSnackbarNotificationComponent implements OnInit {
	@Input() notification: iKitSnackbarNotification;

	@HostBinding("@thisState") thisState = "fade";
	@HostBinding("attr.type") _type = "info";

	@Input() set type(value: "fade" | "translate") {
		this.thisState = value;
	}

	constructor(private elRef: ElementRef) {}

	ngOnInit(): void {
		this._type = this.notification.type;
	}
}
