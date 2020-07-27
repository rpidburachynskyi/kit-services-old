import { Component } from "@angular/core";
import { KitSnackbarService } from "./kit-snackbar.service";
import { iKitSnackbarNotification } from "./models/iKitSnackbarNotification";

@Component({
	selector: "kit-snackbar",
	templateUrl: "./kit-snackbar.component.html",
	styleUrls: ["./kit-snackbar.component.scss"],
})
export class KitSnackbarComponent {
	get notifications(): iKitSnackbarNotification[] {
		return this.snackbar.notifications;
	}

	constructor(private snackbar: KitSnackbarService) {
		snackbar.notify$.subscribe(() => {});
	}
}
