import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ChangePasswordGQL } from "src/app/providers/apollo/generated/graphql";

@Component({
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
	changePasswordDialogVisible: boolean = false;

	changePasswordForm = new FormGroup({
		password: new FormControl(""),
		passwordConfirm: new FormControl(""),
	});

	constructor(private changePasswordGQL: ChangePasswordGQL) {}

	onSubmitChangePassword() {
		this.changePasswordGQL
			.mutate({
				password: this.changePasswordForm.controls.password.value,
			})
			.subscribe(
				({ data: { changePassword } }) => {
					if (changePassword) {
						alert("CHANGED");
					} else {
						alert("NOT CHANGED");
					}
				},
				(error) => {}
			);
	}
}
