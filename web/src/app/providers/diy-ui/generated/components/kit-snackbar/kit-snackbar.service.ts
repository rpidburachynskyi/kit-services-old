import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { iKitSnackbarNotification } from "./models/iKitSnackbarNotification";
import { iKitSnackbarNotificationOptions } from "./models/iKitSnackbarNotificationOptions";
import { iKitSnackbarNotificationAction } from "./models/iKitSnackbarNotificationAction";

@Injectable()
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
			duration: 4500,
		},
		actions: iKitSnackbarNotificationAction[] = []
	) {
		this.notifyAny("info", text, options, actions);
	}

	notifyWarning(
		text: string,
		options: iKitSnackbarNotificationOptions = {
			duration: 4500,
		},
		actions: iKitSnackbarNotificationAction[] = []
	) {
		this.notifyAny("warning", text, options, actions);
	}

	notifyError(
		text: string,
		options: iKitSnackbarNotificationOptions = {
			duration: 4500,
		},
		actions: iKitSnackbarNotificationAction[] = []
	) {
		this.notifyAny("error", text, options, actions);
	}

	notifyCustom(
		text: string,
		options: iKitSnackbarNotificationOptions,
		actions: iKitSnackbarNotificationAction[] = []
	) {
		this.notifyAny("info", text, options, actions);
	}

	private notifyAny(
		type: "error" | "warning" | "info" | string,
		text: string,
		options: iKitSnackbarNotificationOptions,
		actions: iKitSnackbarNotificationAction[]
	) {
		const newNotification: iKitSnackbarNotification = {
			id: Math.random() * 5000 + "",
			text,
			type,
			options,
			actions,
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
