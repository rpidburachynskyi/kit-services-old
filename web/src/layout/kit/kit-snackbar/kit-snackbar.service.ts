import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { iKitSnackbarNotification } from "./models/iKitSnackbarNotification";
import { iKitSnackbarNotificationOptions } from "./models/iKitSnackbarNotifitcationOptions";

@Injectable({
	providedIn: "root",
})
export class KitSnackbarService {
	private _notifications: iKitSnackbarNotification[] = [];

	get notifications(): iKitSnackbarNotification[] {
		return this._notifications;
	}

	notify$ = new BehaviorSubject<iKitSnackbarNotification[]>([]);

	constructor() {}

	notifyInfo(
		text: string,
		options: iKitSnackbarNotificationOptions = {
			duration: 3000,
		}
	) {
		this.notifyAny("info", text, options);
	}

	private notifyAny(
		type: "error" | "warning" | "info",
		text: string,
		options: iKitSnackbarNotificationOptions
	) {
		const newNotification: iKitSnackbarNotification = {
			id: Math.random() * 5000 + "",
			text,
			type,
		};

		this.add(newNotification);

		setTimeout(() => {
			this.remove(newNotification);
		}, options.duration);
	}

	private add(notification: iKitSnackbarNotification) {
		this.notify$.next(
			(this._notifications = [...this._notifications, notification])
		);
	}

	private remove(notification: iKitSnackbarNotification) {
		this.notify$.next(
			(this._notifications = [
				...this._notifications.filter((n) => n !== notification),
			])
		);
	}
}
