import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export enum CacheControlScope {
	Public = "PUBLIC",
	Private = "PRIVATE",
}

export type GroupMover = {
	__typename?: "GroupMover";
	id: Scalars["Int"];
	name: Scalars["String"];
	regExpPattern: Scalars["String"];
	textPattern: Scalars["String"];
	eachFunction: Scalars["String"];
	globalFunction: Scalars["String"];
	argumentsPattern: Scalars["String"];
};

export type Mutation = {
	__typename?: "Mutation";
	saveGroupMover?: Maybe<GroupMover>;
	removeGroupMover?: Maybe<Scalars["Boolean"]>;
	login?: Maybe<User>;
	register?: Maybe<User>;
	logout?: Maybe<Scalars["Boolean"]>;
	changePassword?: Maybe<Scalars["Boolean"]>;
};

export type MutationSaveGroupMoverArgs = {
	id?: Maybe<Scalars["ID"]>;
	name?: Maybe<Scalars["String"]>;
	regExpPattern: Scalars["String"];
	textPattern: Scalars["String"];
	eachFunction: Scalars["String"];
	globalFunction: Scalars["String"];
	argumentsPattern: Scalars["String"];
};

export type MutationRemoveGroupMoverArgs = {
	id: Scalars["ID"];
};

export type MutationLoginArgs = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type MutationRegisterArgs = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type MutationChangePasswordArgs = {
	password: Scalars["String"];
};

export type Query = {
	__typename?: "Query";
	currentUser?: Maybe<User>;
	groupMover?: Maybe<GroupMover>;
};

export type QueryGroupMoverArgs = {
	id: Scalars["ID"];
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	email: Scalars["String"];
	groupMovers?: Maybe<Array<GroupMover>>;
};

export type LoginMutationVariables = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
	login?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "email">>;
};

export type ChangePasswordMutationVariables = {
	password: Scalars["String"];
};

export type ChangePasswordMutation = { __typename?: "Mutation" } & Pick<
	Mutation,
	"changePassword"
>;

export type RegisterMutationVariables = {
	email: Scalars["String"];
	password: Scalars["String"];
};

export type RegisterMutation = { __typename?: "Mutation" } & {
	register?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "email">>;
};

export type CurrentUserQueryVariables = {};

export type CurrentUserQuery = { __typename?: "Query" } & {
	currentUser?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "email">>;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
	Mutation,
	"logout"
>;

export const LoginDocument = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			email
		}
	}
`;

@Injectable({
	providedIn: "root",
})
export class LoginGQL extends Apollo.Mutation<
	LoginMutation,
	LoginMutationVariables
> {
	document = LoginDocument;
}
export const ChangePasswordDocument = gql`
	mutation ChangePassword($password: String!) {
		changePassword(password: $password)
	}
`;

@Injectable({
	providedIn: "root",
})
export class ChangePasswordGQL extends Apollo.Mutation<
	ChangePasswordMutation,
	ChangePasswordMutationVariables
> {
	document = ChangePasswordDocument;
}
export const RegisterDocument = gql`
	mutation Register($email: String!, $password: String!) {
		register(email: $email, password: $password) {
			id
			email
		}
	}
`;

@Injectable({
	providedIn: "root",
})
export class RegisterGQL extends Apollo.Mutation<
	RegisterMutation,
	RegisterMutationVariables
> {
	document = RegisterDocument;
}
export const CurrentUserDocument = gql`
	query CurrentUser {
		currentUser {
			id
			email
		}
	}
`;

@Injectable({
	providedIn: "root",
})
export class CurrentUserGQL extends Apollo.Query<
	CurrentUserQuery,
	CurrentUserQueryVariables
> {
	document = CurrentUserDocument;
}
export const LogoutDocument = gql`
	mutation Logout {
		logout
	}
`;

@Injectable({
	providedIn: "root",
})
export class LogoutGQL extends Apollo.Mutation<
	LogoutMutation,
	LogoutMutationVariables
> {
	document = LogoutDocument;
}
