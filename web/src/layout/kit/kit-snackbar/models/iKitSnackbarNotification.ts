export interface iKitSnackbarNotification {
	id: string;
	type: "error" | "info" | "warning";
	text: string;
}
