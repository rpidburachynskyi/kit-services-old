import { Component, OnInit, Input } from "@angular/core";
import { iKitSnackbarNotification } from "../models/iKitSnackbarNotification";

@Component({
	selector: "kit-snackbar-notification",
	templateUrl: "./kit-snackbar-notification.component.html",
	styleUrls: ["./kit-snackbar-notification.component.scss"],
})
export class KitSnackbarNotificationComponent implements OnInit {
	@Input() notification: iKitSnackbarNotification;

	constructor() {}

	ngOnInit() {}
}
