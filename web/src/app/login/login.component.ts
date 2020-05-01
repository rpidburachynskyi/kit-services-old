import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from '../api.service';
import gql from 'graphql-tag';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private apollo: Apollo,
    private api: ApiService
  ) {

  }

  ngOnInit() {
  }

  login() {
    this.apollo.mutate({
      mutation: loginMutation,
      variables: {
        email: this.email,
        password: this.password
      },
      refetchQueries: [{ query: currentUserQuery }]
    }).subscribe(o => {
      console.log(1);
    })
  }

}

const loginMutation = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
  }
}
`;

const currentUserQuery = gql`
query {
  currentUser {
    id
  }
}`;