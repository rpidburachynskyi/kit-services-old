import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
	selector: 'app-user-panel',
	templateUrl: './user-panel.component.html',
	styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

	user: {
		id: Number,
		email: String
	} = null;

	constructor(
		private apollo: Apollo
	) {
		this.apollo
			.watchQuery({ query })
			.valueChanges
			.subscribe(({ data }) => {
				this.user = {
					id: data['currentUser']['id'],
					email: data['currentUser']['email']
				};
				console.log(this.user);
			})
	}

	ngOnInit() {
	}

}

const query = gql`
query {
  currentUser {
    id
    email
  }
}`;