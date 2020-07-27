import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ThemeManagerService } from "ng-multithemes-theme-manager";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "kit-services";

	constructor(private apollo: Apollo) {
		this.apollo
			.watchQuery({
				query: gql`
					query {
						currentUser {
							id
							email
						}
					}
				`,
			})
			.valueChanges.subscribe((result) => {
				console.log(result);
			});
	}
}
