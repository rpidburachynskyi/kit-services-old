import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitSnackbarComponent } from "./kit-snackbar.component";
import { KitSnackbarNotificationComponent } from "./kit-snackbar-notification/kit-snackbar-notification.component";
import { KitSnackbarService } from "./kit-snackbar.service";

@NgModule({
	declarations: [
		KitSnackbarComponent,
		KitSnackbarNotificationComponent,
	],
	imports: [CommonModule],
	exports: [KitSnackbarComponent],
	providers: [KitSnackbarService],
})
export class KitSnackbarModule {}
