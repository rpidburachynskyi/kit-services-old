import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
	selector: 'app-user-panel',
	templateUrl: './user-panel.component.html',
	styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {

	user: {
		id: Number,
		email: string
	} = null;

	constructor(
		private apollo: Apollo,
	) {
		this.apollo
			.watchQuery({ query })
			.valueChanges
			.subscribe(({ data }) => {
				const { currentUser }: any = data;

				if (!currentUser) {
					this.user = null;
					return;
				}

				this.user = {
					id: currentUser['id'],
					email: currentUser['email']
				};
				console.log(this.user);
			})
	}

	logout() {
		this.apollo.mutate({
			mutation: logoutNutation,
			refetchQueries: [{ query: currentUserQuery }]
		}).subscribe(console.log)
	}

}

const query = gql`
query {
  currentUser {
    id
    email
  }
}`;

const logoutNutation = gql`
	mutation {
		logout
	}
`;

const currentUserQuery = gql`
query {
  currentUser {
	id
	email
  }
}`;