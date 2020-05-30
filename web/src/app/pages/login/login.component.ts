import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import { FormGroup, FormControl } from "@angular/forms";
import {
	LoginGQL,
	CurrentUserDocument,
} from "src/app/providers/apollo/generated/graphql";
import { KitSnackbarComponent } from "src/layout/kit/kit-snackbar/kit-snackbar.component";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	error: string;

	form = new FormGroup({
		email: new FormControl(""),
		password: new FormControl(""),
	});

	constructor(
		private loginGQL: LoginGQL,
		private snackbar: KitSnackbarComponent
	) {}

	onSubmit() {
		this.loginGQL
			.mutate(
				{
					email: this.form.controls.email.value,
					password: this.form.controls.password.value,
				},
				{
					refetchQueries: [
						{
							query: CurrentUserDocument,
						},
					],
				}
			)
			.subscribe(
				({ data: { login } }) => {},
				(error) => {
					const errorMessage = error.message.substring(15);

					switch (errorMessage) {
						case "UNKNOWN_DATA":
							this.error = "Unknown data";
							break;
						default:
							throw new Error(`Unknown error ${errorMessage}`);
					}
				}
			);
	}
}
