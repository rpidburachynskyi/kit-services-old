import { Component, OnInit } from "@angular/core";
import { CurrentUserGQL } from "src/app/providers/apollo/generated/graphql";

@Component({
	selector: "app-current-user-icon",
	template: `<app-user-icon [src]="src"></app-user-icon>`,
	styles: [
		`
			:host {
				width: 32px;
				height: 32px;

				display: flex;
			}
		`,
	],
})
export class CurrentUserIconComponent {
	src: string;

	constructor(private currentUserGQL: CurrentUserGQL) {
		this.currentUserGQL.watch().valueChanges.subscribe((observer) => {
			this.src =
				"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png";
		});
	}
}
