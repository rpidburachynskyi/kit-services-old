import { Component, Output, EventEmitter } from "@angular/core";
import {
	CurrentUserGQL,
	LogoutGQL,
} from "src/app/providers/apollo/generated/graphql";

@Component({
	selector: "app-user-panel",
	templateUrl: "./user-panel.component.html",
	styleUrls: ["./user-panel.component.scss"],
})
export class UserPanelComponent {
	user: {
		id: string;
		email: string;
	};

	@Output("close") close = new EventEmitter();

	constructor(
		private currentUserGQL: CurrentUserGQL,
		private logoutGQL: LogoutGQL
	) {
		this.currentUserGQL
			.watch()
			.valueChanges.subscribe(({ data: { currentUser } }) => {
				if (!currentUser) {
					this.user = null;
					return;
				}

				this.user = {
					id: currentUser["id"],
					email: currentUser["email"],
				};
			});
	}

	logout() {
		this.logoutGQL
			.mutate(
				{},
				{
					refetchQueries: [{ query: this.currentUserGQL.document }],
				}
			)
			.subscribe(
				(observer) => {},
				(error) => {}
			);
	}
}
