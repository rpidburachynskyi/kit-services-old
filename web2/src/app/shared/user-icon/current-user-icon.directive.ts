import { Directive, ElementRef } from "@angular/core";
import { UserIconComponent } from "./user-icon.component";
import { CurrentUserGQL } from "src/app/providers/apollo/generated/graphql";

@Directive({
	selector: "[appCurrentUserIcon]",
})
export class CurrentUserIconDirective {
	constructor(
		private el: ElementRef,
		private userIconComponent: UserIconComponent,
		private currentUserGQL: CurrentUserGQL
	) {
		currentUserGQL
			.watch()
			.valueChanges.subscribe(({ data: { currentUser } }) => {
				if (!!currentUser) {
					userIconComponent.src =
						"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png";
				} else {
					userIconComponent.src =
						"https://investingnotes.trade/wp-content/uploads/2019/04/yandex.jpg";
				}
			});
	}
}
